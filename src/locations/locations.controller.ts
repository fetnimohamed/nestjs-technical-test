import { Controller, Post, Put, Get, Param } from '@nestjs/common';
import { get } from 'http';
import { LocationsService } from './locations.service';

@Controller('locations')
export class LocationsController {
  constructor(private locations: LocationsService) {}

  @Post()
  createLocation() {
    console.log('location ');
  }

  @Put()
  editLocation() {
    console.log('edit location');
  }

  @Get()
  getAllLocations() {
    console.log('get all Locations');
  }

  @Get(':id')
  getLocation(@Param() params) {
    console.log('get location with id', params.id);
  }
  //   @Put(':id')
  //   a
}
