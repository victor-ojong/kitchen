import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { VendorsService } from '../vendors/vendors.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, VendorsService],
  exports: [CustomerService],
})
export class CustomerModule {}
