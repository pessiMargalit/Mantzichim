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
    async get_slain_to_pray() {
        console.log('in ontroller');

        return this.slainService.getSlainWithLowestMasechtotCount();
        
    }

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


}
