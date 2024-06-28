import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';
import { Knex } from 'knex';
import { InjectConnection } from 'nestjs-knex';
import { randomBytes } from 'crypto';

@Injectable()
export class CustomerService {
  constructor(@InjectConnection() private readonly knex: Knex) {}
  async create(createCustomersDto: CreateCustomerDto) {
    return await this.knex
      .table<Customer>('customers')
      .insert({ ...createCustomersDto, customerId: this.generateCustomerId() });
  }

  async findOne(phone: string) {
    const customer = await this.knex.table('customers').where('phone', phone);
    return customer[0];
  }

  generateCustomerId() {
    const randomBytesBuffer = randomBytes(8);
    return 'kitch-' + randomBytesBuffer.toString('hex');
  }
}
