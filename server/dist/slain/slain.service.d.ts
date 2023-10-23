import { Model } from 'mongoose';
import { SlainDTO } from 'src/DTO/slain.dto';
import { Slain, SlainDocument } from 'src/schemas/slain.schema';
export declare class SlainService {
    private slainModel;
    constructor(slainModel: Model<SlainDocument>);
    findAll(): Promise<Slain[]>;
    filterSlainsByQuery(query: any): Promise<Slain[]>;
    create(slainData: SlainDTO): Promise<Slain>;
    update_masechtot_for_slain(masechtot_arr: Array<String>): Promise<void>;
    get_slain_name(data: any): Promise<Object>;
}
