import { Module } from '@nestjs/common';
import { SlainService } from './slain.service';

@Module({
  providers: [SlainService]
})
export class SlainModule {}
