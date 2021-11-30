import { Express } from "express";
import test from "./test.router";
import upload from "./upload.router"

export const NodeRoutes = (app: Express) => {
    app.use("/home", test)
    app.use("/upload", upload)
}
