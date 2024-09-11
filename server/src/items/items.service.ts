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

    // Asegúrate de que 'mode' sea interpretado correctamente como QueryMode
    const where = {
      ...(name && { name: { contains: name, mode: 'insensitive' as const } }),
      ...(minFloat && maxFloat && { float: { gte: minFloat, lte: maxFloat } }),
      ...(minPrice && maxPrice && { price: { gte: minPrice, lte: maxPrice } }),
      ...(category && { category }),
    };

    const orderByClause = orderBy ? { [orderBy]: order || 'asc' } : undefined;

    return this.prisma.item.findMany({
      where,
      orderBy: orderByClause,
    });
  }
}
