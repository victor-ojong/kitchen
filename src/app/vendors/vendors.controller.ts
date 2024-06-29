import {
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { AuthGuard } from '../Guards/auth.guard';
import { CurrentUser } from '../interceptors/auth.interceptors';

@UseGuards(AuthGuard)
@UseInterceptors(CurrentUser)
@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorService: VendorsService) {}

  @Get('detail/:phone')
  async viewOneVendor(@Param('phone') phone: string) {
    return await this.vendorService.findOne(phone);
  }

  @Get('list')
  async listVendors() {
    return await this.vendorService.findAll();
  }
}
