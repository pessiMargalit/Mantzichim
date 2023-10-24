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

  @Prop({type: mongoose.Schema.Types.ObjectId, required: false})
  _id: ObjectId

}

export const SlainSchema = SchemaFactory.createForClass(Slain);