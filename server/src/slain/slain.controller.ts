import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards
} from '@nestjs/common';
import { SlainService } from './slain.service';
import { SlainDTO } from 'src/DTO/slain.dto';
import { MasechtotAndKadish } from 'src/DTO/masechtot_and_kadish.dto';

@Controller('slain')
export class SlainController {
    constructor(private readonly slainService: SlainService) { }

    @Get()
    async getSlainsByQuery(@Query() conditions: any) {
        if (Object.keys(conditions).length === 0) {
            return this.findAll();
        }
        const slains = await this.slainService.filterSlainsByQuery(conditions);
        return slains;
    }

    @Get()
    async findAll() {
        return this.slainService.findAll();
    }

    @Post()
    async create(@Body() slainData: SlainDTO) {
        return this.slainService.create(slainData);
    }

    // Hadassa and Tamar

    // get: object with: array of masechtot, and boolean- kadish or not
    // like: {"masechtot_arr": ["כלים","אבות"], "kadish": true}
    // return: object of slain

    // @Get()
    // async get_slain_to_pray(@Body() data: MasechtotAndKadish) {
    //     return this.slainService.get_slain_to_pray(data);
    // }
}
