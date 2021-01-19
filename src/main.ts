import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { utilities as nestWinstonModuleUtilities, WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';
import * as winston from 'winston';

const winstonTransports: winston.transport[] = [
  new winston.transports.Console({
    format: winston.format.combine(winston.format.timestamp(), nestWinstonModuleUtilities.format.nestLike()),
  }),
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: winstonTransports,
    })})
  await app.listen(3000);
}
bootstrap();
