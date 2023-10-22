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

  @Prop({type: mongoose.Schema.Types.ObjectId, required: false})
  slain_id: ObjectId

}

export const SlainSchema = SchemaFactory.createForClass(Slain);