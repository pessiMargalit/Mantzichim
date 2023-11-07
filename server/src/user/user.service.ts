import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { error } from 'console';
import { name } from 'ejs';
import { Model } from 'mongoose';
import { SlainDTO } from 'src/DTO/slain.dto';
import { UserDTO } from 'src/DTO/user.dto';
import { MailService } from 'src/mail/mail.service';
import { Slain, SlainDocument } from 'src/schemas/slain.schema';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        readonly mailService : MailService,
        // @InjectModel(User.name) private slainModel: Model<SlainDocument>,
        //לסדר להזרקה
    ) { }

    async create(user_dto: UserDTO): Promise<User> {
        let createdUser: any;
        try {
            const user = {
                name: user_dto.name,
                email: user_dto.email,
                masechtot_name: user_dto.masechtot_name,
                slain_id: user_dto.slain_id,
                kadish: user_dto.kadish,
            }
             createdUser =  await new this.userModel(user).save();
        }
        catch (error) {
            console.log(error);
            // send message to the user that error has occourd
        }
    
        if (! error) {
            let slain=
            {
                name:'Aboo Cabir'
            }
            this.mailService.sendEmail(createdUser.email, slain, createdUser);
        }
        console.log(createdUser);
        
        return createdUser;
    }


}

