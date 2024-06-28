import { Injectable } from '@nestjs/common';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
import { Vendor } from './entities/vendor.entity';
import { randomBytes } from 'crypto';

@Injectable()
export class VendorsService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(createVendorDto: CreateVendorDto) {
    return await this.knex
      .table<Vendor>('vendors')
      .insert({ ...createVendorDto, vendorId: this.generateVendorId() });
  }

  async findOne(vendorId: string) {
    const vendor = await this.knex.table('vendors').where('vendorId', vendorId);
    return vendor[0];
  }

  generateVendorId() {
    const randomBytesBuffer = randomBytes(8);
    return 'ven-' + randomBytesBuffer.toString('hex');
  }
}
