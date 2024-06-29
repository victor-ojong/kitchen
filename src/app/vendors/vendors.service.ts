import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
@Injectable()
export class VendorsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findOne(phone: string) {
    const vendor = await this.knex.table('vendors').where('phone', phone);
    return vendor[0];
  }

  async findAll() {
    const vendors = await this.knex.table('vendors');

    return vendors.map((el) => {
      return { name: el.name, phone: el.phone };
    });
  }
}
