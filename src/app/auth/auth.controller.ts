import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateVendorDto } from '../vendors/dto/create-vendor.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create')
  create(@Body() createVendorDto: CreateVendorDto) {
    return this.authService.create(createVendorDto);
  }
}
