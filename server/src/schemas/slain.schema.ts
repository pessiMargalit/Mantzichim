import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Document, ObjectId} from 'mongoose';

export type SlainDocument = Slain & Document;

@Schema()
export class Slain {
  @Prop({type: String, trim: true})
  name: String

    
  @Prop({type: [String], trim: true})
  masechtot_arr: string[] | null

  @Prop({type: Boolean, trim: true})
  kadish: boolean | null

  @Prop({type: mongoose.Schema.Types.ObjectId, required: true})
  slain_id: ObjectId

//   @Prop({required: true})
//   class: Number
}

export const SlainSchema = SchemaFactory.createForClass(Slain);