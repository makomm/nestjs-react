import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { UserDto } from './dto/user.dto';
import { comparePassword, generateJWT } from 'src/utils';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}

    async login(user: UserDto){
        const dbUser = await this.userModel.findOne().where('login').equals(user.login);
        const validPassword = await comparePassword(user.password, dbUser.password);
        if(validPassword) {
            return generateJWT({ _id: dbUser._id, login: dbUser.login });
        }
    }
}
