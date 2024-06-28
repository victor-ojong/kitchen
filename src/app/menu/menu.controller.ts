import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto) {
    // get vendorId from current request object

    const vendorId = '';
    return this.menuService.create(createMenuDto, vendorId);
  }

  @Get('/all')
  fetchAll() {
    return this.menuService.fetchAll();
  }

  @Post('/update')
  async update(@Body() updateMenuDto: UpdateMenuDto) {
    // get vendorId from current request object

    const vendorId = '';
    return await this.menuService.update(updateMenuDto, vendorId);
  }

  @Get('/:vendorId')
  async findByVendor(@Param('vendorId') vendorId: string) {
    return await this.menuService.findByVendor(vendorId);
  }
}
