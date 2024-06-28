import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
@Injectable()
export class VendorsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  async findOne(phone: string) {
    const vendor = await this.knex.table('phone').where('phone', phone);
    return vendor[0];
  }
}
