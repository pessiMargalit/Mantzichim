import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Date, Document, ObjectId} from 'mongoose';

export type SlainDocument = Slain & Document;

@Schema()
export class Slain {
  @Prop({type: String, trim: true})
  name: String

    
  @Prop({type: [String], trim: true})
  masechtot_arr: Array<String> 

  @Prop({type: Boolean, trim: true})
  kadish: boolean 

  @Prop({type: Date, trim: true})
  yarzeit: Date

}

export const SlainSchema = SchemaFactory.createForClass(Slain);