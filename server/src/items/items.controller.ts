import { Controller, Get, Param, Query } from '@nestjs/common';
import { ItemsService } from './items.service';
import { GetItemsDto } from './dto/get-items.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getItems(@Query() getItemsDto: GetItemsDto) {
    return this.itemsService.getItems(getItemsDto);
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(id);
  }
}
