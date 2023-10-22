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

@Controller('slain')
export class SlainController {
    constructor(private readonly slainService: SlainService) { }

    @Get()
    async getSlainsByQuery(@Query() conditions: any) {        
     if (Object.keys(conditions).length === 0){
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

    @Put()
    async add_masechtot(@Body() masechtot_arr: Array<String>){
        // לעדכן
    }
    //---Bat Sheva---
    
    @Post()
    async get_slain_name(@Body() data: Object){
        return this.slainService.get_slain_name(data);
    }
    // @Post()
    // async get_slain_name_for_kadish(@Body() masechtot_arr: String){
    //     return this.slainService.get_slain_name_for_kadish(masechtot_arr);
    // }
}
