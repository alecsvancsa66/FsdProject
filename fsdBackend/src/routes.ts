import { AuthController } from "./controller/AuthController";
import { DessertController } from "./controller/DessertController";
import {UserController} from "./controller/UserController";
import { checkJwt } from "./utils/checkJwt";


export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/desserts",
    controller: DessertController,
    action: "all"
},
{
    method: "post",
    route: "/eval",
    controller: DessertController,
    action: "eval"
}, 
{
    method: "post",
    route: "/login",
    // guard: checkJwt,
    controller: AuthController,
    action: "login"
}];