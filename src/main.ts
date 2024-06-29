import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const PORT = process.env.PORT || 6000;
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({ keys: ['hidden'] }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.enableCors({
    origin: '*',
  });
  await app.listen(PORT);
}
bootstrap();
