import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail() {
console.log('in Sens email');

    await this.mailerService.sendMail({
      to: 'apartmentbrokerage22@gmail.com',
      from: 'h0533185978@gmail.com', // override default from
      subject: '😡',
      template: './confirmation', // `.hbs` extension is appended automatically
      // context: { // ✏️ filling curly brackets with content
      //   name: 'ffff',
      // },
    });
  }
}
