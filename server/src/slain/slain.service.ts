import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Slain, SlainDocument } from 'src/schemas/slain.schema';


@Injectable()
export class SlainService {
    constructor(
        @InjectModel(Slain.name) private slainModel: Model<SlainDocument>,
    ) { }

    async findAll(): Promise<Slain[]> {
        return this.slainModel.find().exec();
    }

    async filterSlainsByQuery(query: any): Promise<Slain[]> {
        const conditions = Object.keys(query).filter((key) => query[key] !== "");

        return this.slainModel.find({
            "$and": conditions.map((condition) => ({ [condition]: query[condition] })),
        }).exec();
    }

    async create(slainData: any): Promise<Slain> {
        const newSlain = {
            slain_id: slainData.slain_id,
            name: slainData.name,
            masechtot_arr: slainData.masechtot_arr,
            kadish: slainData.kadish
        }

        const createdslain = new this.slainModel(newSlain);
        return createdslain.save();
    }

}
