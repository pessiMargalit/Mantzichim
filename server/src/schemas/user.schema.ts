import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, {Document, ObjectId} from 'mongoose';

export type UserDocument = User & Document;


@Schema()
export class User {
  @Prop({type: String, trim: true})
  name: String

  @Prop({type: String, trim: true})
  email: String
    
  @Prop({type: [String], trim: true})
  masechtot_name: string[] | null

  @Prop({type: String, trim: true})
  slain_name: String

  @Prop({type: Boolean, trim: true})
  kadish: boolean | null

  @Prop({type: mongoose.Schema.Types.ObjectId, required: false})
  user_id: ObjectId

}

export const UserSchema = SchemaFactory.createForClass(User);