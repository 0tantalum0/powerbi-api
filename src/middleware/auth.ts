import { NextFunction, Request, Response } from "express";

export const authHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log("authHandler");
    next();
}