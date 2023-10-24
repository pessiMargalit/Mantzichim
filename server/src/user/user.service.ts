import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/DTO/user.dto';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) { }

    async create(user_dto: UserDTO): Promise<User> {
        const user = {
            name: user_dto.name,
            email: user_dto.email,
            masechtot_name: user_dto.masechtot_name,
            slain_id: user_dto.slain_id,
            kadish: user_dto.kadish,
        }

        const createdUser = new this.userModel(user);
        return createdUser.save();
    }

}

