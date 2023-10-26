import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { MasechtotAndKadish } from 'src/DTO/masechtot_and_kadish.dto';
import { SlainDTO } from 'src/DTO/slain.dto';
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

    async create(slainData: SlainDTO): Promise<Slain> {
        const createdslain = new this.slainModel(slainData);        
        return createdslain.save();
    }

    async update_masechtot_for_slain(slain_id: ObjectId, masechtot_name: Array<String>) {
        // let all_masechtot = slain.masechtot_arr.concat(masechtot_name);
        // slain.masechtot_arr = all_masechtot;

        // console.log("slain: ", slain);
        
        return this.slainModel.updateOne(
            { _id: slain_id },
            {
                $push: { masechtot_arr:  masechtot_name } 
            }).exec();
    }

    
    async getSlainWithLowestMasechtotCount() {
        console.log('in service');
        
        return await this.slainModel.findOne({'name':'אבו נשנש' });
       
        
    }

}
