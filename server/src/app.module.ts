import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlainController } from './slain/slain.controller';
import { SlainModule } from './slain/slain.module';

@Module({
  imports: [SlainModule],
  controllers: [AppController, SlainController],
  providers: [AppService],
})
export class AppModule {}
