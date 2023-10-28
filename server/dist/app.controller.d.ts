import { MailService } from './mail/mail.service';
export declare class AppController {
    private readonly mail;
    constructor(mail: MailService);
    getHello(): String;
}
