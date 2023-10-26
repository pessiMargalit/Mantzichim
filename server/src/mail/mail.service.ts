import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { SlainDTO } from 'src/DTO/slain.dto';
import { UserDTO } from 'src/DTO/user.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) { }

  async sendEmail(addressee: string, slainDetails: any, userDetails: UserDTO, subject: string = 'הצטרפות למיזם מנציחים') {

    await this.mailerService.sendMail({
      to: addressee,
      subject: subject,
      template: './confirmation',
      context: {
        nameOfPerson: userDetails.name,
        nameOfSlain: slainDetails.name,

      },
      attachments: [{
        filename: 'logo.png',
        path: __dirname + '/templates/logo.png',
        cid: 'logo'
      }],

    });
  }
}
