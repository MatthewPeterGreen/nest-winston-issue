import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    Logger.log('Try to call log')
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
