import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// import { SlainService } from 'src/slain/slain.service';
import { SlainModule } from 'src/slain/slain.module';
import { MailService } from 'src/mail/mail.service';
import { MailModule } from 'src/mail/mail.module';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
        SlainModule,
        MailModule
    ],
    // providers: [UserService, SlainService],
    providers: [UserService],
    controllers: [UserController]
})
export class UserModule {}
