import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetItemsDto } from './dto/get-items.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async getItems(getItemsDto: GetItemsDto) {
    const {
      name,
      minFloat,
      maxFloat,
      minPrice,
      maxPrice,
      category,
      orderBy,
      order,
    } = getItemsDto;

    const where: Prisma.ItemWhereInput = {
      ...(name && {
        name: {
          contains: name,
          mode: 'insensitive' as Prisma.QueryMode,
        },
      }),
      ...(category && { category }),
      ...(minPrice !== undefined &&
        maxPrice !== undefined && {
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
        }),
      ...(minFloat !== undefined &&
        maxFloat !== undefined && {
          float: {
            gte: minFloat.toString(),
            lte: maxFloat.toString(),
          },
        }),
    };

    const orderByClause: Prisma.ItemOrderByWithRelationInput = orderBy
      ? { [orderBy]: order || 'asc' }
      : { createdAt: 'desc' };

    try {
      const items = await this.prisma.item.findMany({
        where,
        orderBy: orderByClause,
      });

      if (items.length === 0) {
        throw new NotFoundException('No items found matching the criteria');
      }

      return items;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error(`Database error: ${error.message}`);
      }
      throw error;
    }
  }

  async getItemById(id: string) {
    const item = await this.prisma.item.findUnique({
      where: { id },
    });

    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return item;
  }
}
