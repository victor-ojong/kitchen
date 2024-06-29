import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(CreateMenuDto: CreateMenuDto, currentUser: any) {
    if (currentUser.role !== 'vendor') {
      return { status: 'fail', message: 'access denied!' };
    }
    return await this.knex
      .table<Menu>('menu_items')
      .insert({ ...CreateMenuDto, vendorId: currentUser.vendorId });
  }

  async update(updateMenuDto: UpdateMenuDto, currentUser: any) {
    if (currentUser.role !== 'vendor') {
      return { status: 'fail', message: 'access denied!' };
    }
    const item = await this.knex
      .table('menu_items')
      .where({
        vendorId: parseInt(currentUser.vendorId),
        id: parseInt(updateMenuDto.id),
      })
      .update(updateMenuDto);

    if (item == 0) {
      return {
        status: 'fail',
        message: `Access denied!`,
      };
    }
    return {
      status: 'success',
      message: `menu item ${updateMenuDto.id} successfully updated!`,
    };
  }

  async delete(id: string, currentUser: any) {
    if (currentUser.role !== 'vendor') {
      return { status: 'fail', message: 'access denied!' };
    }
    const isDeleted = await this.knex
      .table('menu_items')
      .where({ id: parseInt(id), vendorId: parseInt(currentUser.vendorId) })
      .delete();

    if (!isDeleted) {
      return { status: 'fail', message: 'access denied!' };
    }

    return {
      status: 'success',
      message: `item number ${id} successfully deleted`,
    };
  }

  async findOne(item_number: string) {
    return await this.knex.table('menu_items').where('id', item_number);
  }

  async findByVendor(vendorId: string) {
    return await this.knex.table('menu_items').where('vendorId', vendorId);
  }

  async fetchAll() {
    const items = await this.knex.table('menu_items');

    console.log(items);

    return items;
  }
}
