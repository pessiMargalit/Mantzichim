import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { log } from 'console';
@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): String {
    return 'started'
  }
}
