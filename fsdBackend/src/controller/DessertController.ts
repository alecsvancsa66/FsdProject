import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Dessert } from "../entity/Dessert";

export class DessertController {

    private desertRepository = getRepository(Dessert);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.desertRepository.find();
    }
}