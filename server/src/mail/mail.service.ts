import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail() {

    await this.mailerService.sendMail({
      to: ['h0533185978@gmail.com','bsy9031@gmail.com','m0527669018@gmail.com','ts0533110485@gmail.com','pessimargalit@gmail.com',
    'rut05567@gmail.com','CHAVIDAITSH@gmail.com'],
      subject: 'הצטרפות למיזם מנציחים',
      template: './confirmation',
      context: { 
        nameOfPerson: 'אברך',
        nameOfSlain:'נרצח',
        motherSlain:'אמא',
        fatherSlain:'אבא'

      },
      attachments: [{
        filename: 'logo.png',
          path: __dirname +'/templates/logo.png',
         cid: 'logo'
  }],

    });
  }
}
