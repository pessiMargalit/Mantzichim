import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Date, Document, ObjectId} from 'mongoose';

export type SlainDocument = Slain & Document;

@Schema()
export class Slain {
  @Prop({type: String, trim: true})
  name: String

    
  @Prop({type: [String], trim: true})
  masechtot_arr: Array<String> | null

  @Prop({type: Boolean, trim: true})
  kadish: boolean 

  @Prop({type: Date, trim: true})
  yarzeit: Date

  //בתשבע: הוספתי פה שזה יכול להיות NULL אני מקווה שיעבוד
  @Prop({type: mongoose.Schema.Types.ObjectId, trim: true, required: false})
  _id: ObjectId | null

}

export const SlainSchema = SchemaFactory.createForClass(Slain);