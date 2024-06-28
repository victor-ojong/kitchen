import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { HttpException, Injectable } from '@nestjs/common';
import { VendorsService } from '../vendors/vendors.service';
import { CreateCustomerDto } from '../customers/dto/create-customer.dto';
import { CustomerService } from '../customers/customer.service';

export const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private vendorsService: VendorsService,
    private readonly customerService: CustomerService,
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(createCustomerDto.password, salt, 32)) as Buffer;

    createCustomerDto.password = salt + '.' + hash.toString('hex');

    return this.customerService.create(createCustomerDto);
  }

  async customersLogin(phone: string, password: string) {
    const customer = await this.customerService.findOne(phone);

    if (!customer) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const [salt, hashedDB] = customer.password.split('.');

    const newHash = (await scrypt(password, salt, 32)) as Buffer;

    const isVerified =
      hashedDB === newHash.toString('hex').slice(0, hashedDB.length);

    if (!isVerified) {
      throw new HttpException('Invalid login credentials', 403);
    }
    // sanitize customer and send jwt token and customer object to client
    customer.password = undefined;
    return customer;
  }

  async vendorLogin(vendorId: string, pin: string) {
    const vendor = await this.vendorsService.findOne(vendorId);

    if (!vendor) {
      throw new HttpException('Invalid login credentials', 403);
    }

    const isVerified = vendor.pin == pin;

    if (!isVerified) {
      throw new HttpException('Invalid login credentials', 403);
    }

    return vendor;
  }
}
