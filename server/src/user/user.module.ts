import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SlainService } from 'src/slain/slain.service';
import { SlainModule } from 'src/slain/slain.module';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UserSchema}]),
        SlainModule,
    ],
    providers: [UserService, SlainService],
    controllers: [UserController]
})
export class UserModule {}
