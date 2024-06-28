import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto) {
    // get vendorId from current request object
    return this.menuService.create(createMenuDto);
  }

  @Get('/all')
  fetchAll() {
    return this.menuService.fetchAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    // get vendorId from current request object
    return this.menuService.update(+id, updateMenuDto);
  }
}
