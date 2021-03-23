import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import { Dessert } from "./entity/Dessert";
//import {cors} from "cors";

createConnection().then(async connection => {

    // create express app
    const app = express();
    const cors = require('cors');
    app.use(bodyParser.json());
    app.use(cors());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, route.guard? [route.guard] : null, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    await connection.manager.save(connection.manager.create(User, {
        email: "Timber",
        password: "Saw",
    }));
    await connection.manager.save(connection.manager.create(User, {
        email: "Phantom",
        password: "Assassin",
    }));
    await connection.manager.save(connection.manager.create(Dessert, {
        name: "Dessert1",
        calories: 100,
        fat: 12,
        carbs: 12,
        protein: 25,
        sodium: 14,
        calcium: 12,
        iron: 14
    }));
    await connection.manager.save(connection.manager.create(Dessert, {
        name: "Dessert2",
        calories: 99,
        fat: 12,
        carbs: 12,
        protein: 25,
        sodium: 14,
        calcium: 12,
        iron: 14
    }));

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
