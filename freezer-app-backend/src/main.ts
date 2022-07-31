import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost',
      'http://localhost:4200',
      'http://192.168.1.81:4200',
    ],
  });
  await app.listen(3000);
}

bootstrap();
