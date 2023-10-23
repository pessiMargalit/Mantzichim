import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
        const newSlain = {
            // slain_id: slainData.slain_id,
            name: slainData.name,
            masechtot_arr: slainData.masechtot_arr,
            kadish: slainData.kadish
        }

        const createdslain = new this.slainModel(newSlain);
        return createdslain.save();
    }

    async update_masechtot_for_slain(masechtot_arr: Array<String>) {

    }

    // Hadassa and Tamar
    // get: object with: array of masechtot, and boolean- kadish or not
    // like: {"masechtot_arr": ["כלים","אבות"], "kadish": true}
    // return: name of slain for masechtot, and name of slain for kadish
    async get_slains_name(data: any): Promise<Object> {
        let name_for_masechtot = "";
        let name_for_kadish = "";
        if (data.masechtot_arr.length != 0) {
            //כאן האלגוריתם שליפה של מסכתות של הדסה ותמר
            //נא ליצא את האלגוריתם לפונקציה
            //וכמובן לא לשכוח א-סינכרוני
            name_for_masechtot = "the name from the algorithem"
        }
        if (data.kadish == true) {
            //כאן האלגוריתם שליפה של הקדיש של הדסה ותמר
            //נא ליצא את האלגוריתם לפונקציה
            //וכמובן לא לשכוח א-סינכרוני
            name_for_kadish = "the name from the algorithem";
        }
        return {
            "name_for_masechtot": name_for_masechtot,
            "name_for_kadish": name_for_kadish
        };
    }


}
