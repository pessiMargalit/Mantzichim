import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { log } from 'console';
@Controller()
export class AppController {
  constructor(private readonly mail: MailService) {}

  @Get()
  getHello(): String {
    this.mail.sendEmail();
    return 'started'
  }
}
