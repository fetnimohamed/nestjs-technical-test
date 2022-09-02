import { Injectable } from '@nestjs/common';
import { CreateItemDto, ItemDto } from 'src/dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}
  async create(item: CreateItemDto) {
    const itemCreate = await this.prisma.items.create({ data: item });
    return itemCreate;
  }
  async edit(itemToUpdate: ItemDto) {
    return await this.prisma.items.update({
      where: {
        id: itemToUpdate.id,
      },
      data: itemToUpdate,
    });
  }
  async findOne(id) {
    return await this.prisma.items.findUnique({
      where: {
        id,
      },
    });
  }
  async findAll() {
    const Items = await this.prisma.items.findMany();
    return Items;
  }
  async changeStatus(id) {
    const itemToUpdate = await this.findOne(id);
    return await this.prisma.items.update({
      where: {
        id,
      },
      data: { ...itemToUpdate, active: !itemToUpdate.active },
    });
  }
}
