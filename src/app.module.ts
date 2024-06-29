import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './app/customers/customer.module';
import { VendorsModule } from './app/vendors/vendors.module';
import { MenuModule } from './app/menu/menu.module';
import { AuthModule } from './app/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        config: {
          client: 'mysql',
          version: '5.7',
          useNullAsDefault: true,
          connection: {
            database: configService.get<string>('DATABASE_NAME'),
            user: configService.get<string>('DATABASE_USER'),
            password: configService.get<string>('DATABASE_PASSWORD'),
            host: configService.get<string>('DATABASE_HOST'),
            port: configService.get<number>('DATABASE_PORT'),
          },
        },
      }),
      inject: [ConfigService],
    }),
    CustomerModule,
    VendorsModule,
    MenuModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
