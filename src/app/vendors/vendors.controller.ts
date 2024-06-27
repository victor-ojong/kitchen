import { Controller, Get, Post, Body, Session } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post('/create')
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(createVendorDto);
  }

  @Post('/login')
  async login(
    @Body() vendorLoginDto: { vendorId: string; pin: string },
    @Session() session: any,
  ) {
    const vendor = await this.vendorsService.login(
      vendorLoginDto.vendorId,
      vendorLoginDto.pin,
    );
    session.userId = vendor.id;
    return vendor;
  }

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
    return { status: 'success', message: 'You are logged out' };
  }
}
