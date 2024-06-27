import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './app/customers/customer.module';
import { VendorsModule } from './app/vendors/vendors.module';

@Module({
  imports: [CustomerModule, VendorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
