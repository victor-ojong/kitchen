import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(CreateMenuDto: CreateMenuDto, vendorId: string) {
    return await this.knex
      .table<Menu>('menu_items')
      .insert({ ...CreateMenuDto, vendorId });
  }

  async update(item_number: string, vendorId: string) {
    const item = await this.knex
      .table('products')
      .where(vendorId, item_number)
      .update(UpdateMenuDto);

    /// check to see that it works well
    console.log(item);
    return {
      status: 'success',
      message: `menu item ${item_number}successfully deleted`,
    };
  }

  async delete(item_number: string, vendorId: string) {
    return await this.knex
      .table('menu_items')
      .where({ item_number, vendorId })
      .delete();
  }

  async findOne(item_number: string) {
    return await this.knex
      .table('menu_items')
      .where('item_number', item_number);
  }

  async findByVendor(vendorId: string) {
    return await this.knex.table('menu_items').where('vendorId', vendorId);
  }

  async fetchAll() {
    return await this.knex.table('menu_items');
  }
}
