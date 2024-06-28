import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { VendorsService } from '../vendors/vendors.service';
import { CustomerService } from '../customers/customer.service';

@Module({
  controllers: [MenuController],
  providers: [MenuService, VendorsService, CustomerService],
  imports: [MenuModule],
  exports: [MenuService],
})
export class MenuModule {}
