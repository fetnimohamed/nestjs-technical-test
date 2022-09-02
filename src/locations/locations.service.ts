import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private prisma: PrismaService) {}
  async create(location) {
    return await this.prisma.locations.create(location);
  }
  async edit(location) {
    return await this.prisma.locations.update({
      where: {
        id: location.id,
      },
      data: location,
    });
  }

  async findAll() {
    return this.prisma.locations.findMany();
  }

  async findById(id: number) {
    return await this.prisma.locations.findUnique({
      where: {
        id,
      },
    });
  }

  async changeLocationStatus(id: number) {
    const loactionToUpdate = await this.findById(id);
    return await this.prisma.locations.update({
      where: {
        id,
      },
      data: { ...loactionToUpdate, active: !loactionToUpdate.active },
    });
  }
}
