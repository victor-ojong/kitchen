import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { VendorsModule } from '../vendors/vendors.module';

@Module({
  imports: [VendorsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
