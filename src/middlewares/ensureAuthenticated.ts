import { NextFunction, Request, response, Response } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        })
    }
    const [, token] = authToken.split(" ")

    try {
        verify(token, "ee3d22fa-8fbc-4a74-b45a-b243e68b3f04")

        return next()

    } catch(err) {
        return response.status(401).json({
            message: "Token invalid"
        })
    }
}