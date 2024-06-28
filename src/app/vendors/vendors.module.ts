import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { CustomerService } from '../customers/customer.service';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService, CustomerService],
  exports: [VendorsService],
})
export class VendorsModule {}
