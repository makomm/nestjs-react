import {compare} from "bcrypt";
import { UserDto } from "src/user/dto/user.dto";
import * as jwt from "jsonwebtoken";

export const comparePassword = async function (password: String, dbPassword: String): Promise<String> {
    return compare(password, dbPassword);    
}

export const generateJWT = function (user): String {
    return jwt.sign(user,process.env.TOKEN_KEY,{expiresIn: "1h"});
}

export const validateJWT = function (token) {
    return jwt.verify(token,process.env.TOKEN_KEY);
}