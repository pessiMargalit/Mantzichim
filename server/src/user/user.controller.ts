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
import { UserService } from './user.service';
import { SlainService } from '../slain/slain.service';
import { UserDTO } from 'src/DTO/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly slainService: SlainService) { }


    @Post()
    async create_user(@Body() user_dto: UserDTO) {
        this.userService.create(user_dto);

        this.slainService.update_masechtot_for_slain(user_dto.slain_id, user_dto.masechtot_name);

        // return Response...

    }

    

}
