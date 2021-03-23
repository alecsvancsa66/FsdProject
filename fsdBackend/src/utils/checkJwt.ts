import {NextFunction, Request, Response} from "express";

export function checkJwt(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        this.jwt.verify(token, this.accessTokenSecret, (err, user) => {
            if (err) {
                return response.sendStatus(403);
            }

            request.user = user;
            next();
        });
    } else {
        response.sendStatus(401);
    }
}
