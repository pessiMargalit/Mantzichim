import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlainController } from './slain/slain.controller';
import { SlainModule } from './slain/slain.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SlainService } from './slain/slain.service';


@Module({
  imports: [
    SlainModule,
    MongooseModule.forRoot('mongodb+srv://rut05567:GjtGaQuNlcQ4kUe7@cluster0.n1urltn.mongodb.net/Mantzichim'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
