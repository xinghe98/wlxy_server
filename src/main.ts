import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { response } from './common/response';
import { httpfitter } from './common/fitter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new response());
  app.useGlobalFilters(new httpfitter());
  await app.listen(3000);
}
bootstrap();
