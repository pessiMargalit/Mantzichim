import mongoose, { Document, ObjectId } from 'mongoose';
export type SlainDocument = Slain & Document;
export declare class Slain {
    name: String;
    masechtot_arr: string[] | null;
    kadish: boolean | null;
    slain_id: ObjectId;
}
export declare const SlainSchema: mongoose.Schema<Slain, mongoose.Model<Slain, any, any, any, mongoose.Document<unknown, any, Slain> & Slain & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Slain, mongoose.Document<unknown, {}, mongoose.FlatRecord<Slain>> & mongoose.FlatRecord<Slain> & {
    _id: mongoose.Types.ObjectId;
}>;
