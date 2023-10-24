import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlainModule } from './slain/slain.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    SlainModule,
    MongooseModule.forRoot('mongodb+srv://rut05567:GjtGaQuNlcQ4kUe7@cluster0.n1urltn.mongodb.net/Mantzichim'),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
