import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {jwt} from "jsonwebtoken";

export class AuthController {

    private authRepository = getRepository(User);
    
    async login(request: Request, response: Response, next: NextFunction) {
        const express = require('express');
       
        const accessTokenSecret = 'youraccesstokensecret';
        const user = this.authRepository.findOne(request.body);

        if(user){
            console.log(jwt)
            const accessToken = jwt.sign({user: (await user).email},accessTokenSecret)
            response.json(accessToken);
        }else {
            response.send('Invalid user');
        }

    }



}