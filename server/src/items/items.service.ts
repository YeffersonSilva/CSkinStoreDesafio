import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetItemsDto } from './dto/get-items.dto';

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

    const where = {
      ...(name && { name: { contains: name, mode: 'insensitive' as const } }),
      ...(minFloat !== undefined &&
        maxFloat !== undefined && {
          float: { gte: Number(minFloat), lte: Number(maxFloat) },
        }),
      ...(minPrice !== undefined &&
        maxPrice !== undefined && {
          price: { gte: Number(minPrice), lte: Number(maxPrice) },
        }),
      ...(category && { category }),
    };

    const orderByClause = orderBy ? { [orderBy]: order || 'asc' } : undefined;

    return this.prisma.item.findMany({
      where,
      orderBy: orderByClause,
    });
  }
}
