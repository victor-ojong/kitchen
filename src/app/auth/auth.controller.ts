import { Controller, Post, Body, Get, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/vendor/login')
  async vendorLogin(
    @Body() vendorLoginDto: { pin: string; phone: string },
    @Session() session: any,
  ) {
    const vendor = await this.authService.vendorLogin(
      vendorLoginDto.phone,
      vendorLoginDto.pin,
    );

    session.phone = vendor.phone;
    return vendor;
  }

  @Post('/customer/create')
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.authService.createCustomer(createCustomerDto);
  }

  @Post('/customer/login')
  async loginCustomer(
    @Body() loginCustomerDto: { phone: string; password: string },
    @Session() session: any,
  ) {
    const customer = await this.authService.customersLogin(
      loginCustomerDto.phone,
      loginCustomerDto.password,
    );

    session.phone = loginCustomerDto.phone;

    return customer;
  }

  @Get('/logout')
  logOut(@Session() session: any) {
    session.userId = null;
    return { status: 'success', message: 'You are logged out' };
  }
}
