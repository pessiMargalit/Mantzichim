import { SlainService } from './slain.service';
import { SlainDTO } from 'src/DTO/slain.dto';
export declare class SlainController {
    private readonly slainService;
    constructor(slainService: SlainService);
    getSlainsByQuery(conditions: any): Promise<import("../schemas/slain.schema").Slain[]>;
    findAll(): Promise<import("../schemas/slain.schema").Slain[]>;
    create(slainData: SlainDTO): Promise<import("../schemas/slain.schema").Slain>;
}
