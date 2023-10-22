import { Model } from 'mongoose';
import { Slain, SlainDocument } from 'src/schemas/slain.schema';
export declare class SlainService {
    private slainModel;
    constructor(slainModel: Model<SlainDocument>);
    findAll(): Promise<Slain[]>;
    filterSlainsByQuery(query: any): Promise<Slain[]>;
    create(slainData: any): Promise<Slain>;
}
