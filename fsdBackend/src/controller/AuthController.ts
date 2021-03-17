import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class AuthController {

    private authRepository = getRepository(User);
    
    async login(request: Request, response: Response, next: NextFunction) {
        const express = require('express');
        const app = express();
        const jwt = require('express-jwt');
        const accessTokenSecret = 'youraccesstokensecret';
        const user = this.authRepository.findOne(request.body);

        // app.get('/login',
        //     jwt({ secret: 'shhhhhhared-secret', algorithms: ['HS256'] }),
        //     function(request, response) {
        //         if (!user) return response.sendStatus(401);
        //         response.sendStatus(200);
        // });

        return user;
    }

}