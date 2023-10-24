import { Module } from '@nestjs/common';
import { SlainService } from './slain.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SlainSchema } from 'src/schemas/slain.schema';
import { SlainController } from './slain.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Slain', schema: SlainSchema }]) // 3. Setup the mongoose module to use the employee schema
  ],
  providers: [SlainService],
  controllers: [SlainController],
  exports: [SlainService]
})
export class SlainModule {}
