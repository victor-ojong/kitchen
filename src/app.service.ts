import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Chowdeck Kitchen is live 🔥!';
  }
}
