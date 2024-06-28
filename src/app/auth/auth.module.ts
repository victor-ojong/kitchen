import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { VendorsModule } from '../vendors/vendors.module';
import { CustomerModule } from '../customers/customer.module';

@Module({
  imports: [VendorsModule, CustomerModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
