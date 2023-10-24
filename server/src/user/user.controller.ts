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
import { UserDTO } from 'src/DTO/user.dto';
import { UserAndSlain } from 'src/DTO/user_and_slain.dto';
import { SlainService } from '../slain/slain.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly slainService: SlainService) { }


    // get: user, slain
    // create user, update msechtot and kadish to slain
    @Post()
    async create_user(@Body() data: UserAndSlain) {
        let user_dto = data.user;
        this.userService.create(user_dto);

        let slain = data.slain;
        this.slainService.update_masechtot_for_slain(slain, user_dto.masechtot_name);

        // return Response...

    }

    

}
