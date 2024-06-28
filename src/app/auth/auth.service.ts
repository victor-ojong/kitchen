import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

import { HttpException, Injectable } from '@nestjs/common';

import { VendorsService } from '../vendors/vendors.service';
import { CreateVendorDto } from '../vendors/dto/create-vendor.dto';

export const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private vendorsService: VendorsService) {}

  async create(createVendorDto: CreateVendorDto) {
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(createVendorDto.pin, salt, 32)) as Buffer;

    createVendorDto.pin = salt + '.' + hash.toString('hex');

    return this.vendorsService.create(createVendorDto);
  }

  async login(vendorId: string, pin: string) {
    const user = await this.vendorsService.findOne(vendorId);

    if (!user) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const [salt, hashedDB] = user.password.split('.');

    const newHash = (await scrypt(pin, salt, 32)) as Buffer;

    const isValid =
      hashedDB === newHash.toString('hex').slice(0, hashedDB.length);

    if (!isValid) {
      throw new HttpException('Invalid login credentials', 403);
    }
    // sanitize user and send jwt token and user object to client
    user.pin = undefined;
    return user;
  }
}
