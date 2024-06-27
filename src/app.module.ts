import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './app/customers/customer.module';
import { VendorsModule } from './app/vendors/vendors.module';
import { MenuModule } from './app/menu/menu.module';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          database: 'bxaoo1jubuwcy2br0gz7',
          user: 'usjvywpbahqyjpba',
          password: 'SnhQGelq9zRBlstJBsf7',
          host: 'bxaoo1jubuwcy2br0gz7-mysql.services.clever-cloud.com',
          port: 3306,
        },
      },
    }),
    CustomerModule,
    VendorsModule,
    MenuModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
