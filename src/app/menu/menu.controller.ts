import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseInterceptors,
  UseGuards,
  Req,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { AuthGuard } from '../Guards/auth.guard';
import { CurrentUser } from '../interceptors/auth.interceptors';

@UseGuards(AuthGuard)
@UseInterceptors(CurrentUser)
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('/create')
  create(@Body() createMenuDto: CreateMenuDto, @Req() req: any) {
    return this.menuService.create(createMenuDto, req.user);
  }

  @Post('/update')
  async update(@Body() updateMenuDto: UpdateMenuDto, @Req() req: any) {
    return await this.menuService.update(updateMenuDto, req.user);
  }

  @Get('list/:vendorId')
  async findByVendor(@Param('vendorId') vendorId: string) {
    return await this.menuService.findByVendor(vendorId);
  }

  @Get('remove/:menu_Id')
  async deleteMenu(@Param('menu_Id') menu_Id: string, @Req() req: any) {
    return await this.menuService.delete(menu_Id, req.user);
  }

  @Get('detail/:menu_Id')
  async itemDetail(@Param('menu_Id') menu_Id: string) {
    return await this.menuService.findOne(menu_Id);
  }
}
