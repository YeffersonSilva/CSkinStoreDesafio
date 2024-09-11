import {
  IsOptional,
  IsString,
  IsNumber,
  Min,
  Max,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

enum OrderBy {
  price = 'price',
  float = 'float',
}

enum Order {
  asc = 'asc',
  desc = 'desc',
}

export class GetItemsDto {
  @ApiProperty({ required: false, description: 'Filter by item name' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    required: false,
    minimum: 0,
    maximum: 1,
    description: 'Minimum float value',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  @Type(() => Number)
  minFloat?: number;

  @ApiProperty({
    required: false,
    minimum: 0,
    maximum: 1,
    description: 'Maximum float value',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(1)
  @Type(() => Number)
  maxFloat?: number;

  @ApiProperty({ required: false, minimum: 0, description: 'Minimum price' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  minPrice?: number;

  @ApiProperty({ required: false, minimum: 0, description: 'Maximum price' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Type(() => Number)
  maxPrice?: number;

  @ApiProperty({ required: false, description: 'Filter by category' })
  @IsOptional()
  @IsString()
  category?: string;

  @ApiProperty({
    required: false,
    enum: OrderBy,
    description: 'Order by field',
  })
  @IsOptional()
  @IsEnum(OrderBy)
  orderBy?: OrderBy;

  @ApiProperty({ required: false, enum: Order, description: 'Sort order' })
  @IsOptional()
  @IsEnum(Order)
  order?: Order;
}
