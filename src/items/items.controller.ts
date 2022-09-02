import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { get } from 'http';
import { ItemDto } from '../dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Post()
  createItem(@Body() body: ItemDto) {
    return this.itemService.create(body);
  }
  @Get('')
  getItems() {
    return this.itemService.findAll();
  }

  @Put('')
  editItem(@Body() body: ItemDto) {
    return this.itemService.edit(body);
  }

  @Put(':id')
  changeItemStatus(@Param('id', ParseIntPipe) id) {
    return this.itemService.changeStatus(id);
  }

  @Get(':id')
  getItem(@Param('id', ParseIntPipe) id) {
    return this.itemService.findOne(id);
  }
}
