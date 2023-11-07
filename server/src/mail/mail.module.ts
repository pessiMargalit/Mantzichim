import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST,
        port: 587,
        secure: false,
        logger: true,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.APP_PASS,
        },
      },
      defaults: {
        from: `"מנציחים" ${process.env.MAIL_USERNAME}`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
