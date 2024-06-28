import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { VendorsService } from '../vendors/vendors.service';
import { CustomerService } from '../customers/customer.service';

@Injectable()
export class CurrentUser implements NestInterceptor {
  constructor(
    private vendorService: VendorsService,
    private readonly customerService: CustomerService,
  ) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const phone = request.session.phone;

    if (!request.user) {
      let user = await this.vendorService.findOne(phone);

      if (!user) {
        user = await this.customerService.findOne(phone);
      }

      user ? (request.user = user) : (request.user = null);
    }

    return next.handle();
  }
}
