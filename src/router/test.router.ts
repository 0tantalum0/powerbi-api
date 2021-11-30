import express, { Request, Response, NextFunction } from "express";
import { MyApp } from "../global"
//import {authHandler} from "../middleware/auth"

const router = express.Router();

export const authHandler = (req: Request, res: Response, next: NextFunction) => {
    console.log(" function เช็คเงื่อนไข");
    next();
}
router.use(authHandler);

router.get("/test1", async (req: Request, res: Response) => {
    res.status(200).send("Node TS/home/test1")
});

router.get("/test2", async (req: Request, res: Response) => {
    res.status(200).send("Node TS/home/test2")
});

router.get("/user", async (req: Request, res: Response) => {
    const result = await MyApp.pool.request().query(`
     SELECT * FROM Master_User
    `);
    res.status(200).send(result.recordset)
});

router.get("/test3", async (req: Request, res: Response) => {
    res.status(200).send("ผ่าน function เช็คเงื่อนไขแล้ว")
});


export default router;