import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
@Injectable()
export class VendorsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findOne(vendorId: string) {
    const vendor = await this.knex.table('vendors').where('vendorId', vendorId);
    return vendor[0];
  }
}
