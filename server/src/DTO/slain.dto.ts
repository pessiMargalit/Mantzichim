import { Date } from "mongoose";

export class SlainDTO
{
    name: string;
    masechtot_arr: Array<String>;
    kadish: boolean;
    yarzeit: Date;
    
}