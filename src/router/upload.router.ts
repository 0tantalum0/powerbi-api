import express, { Request, Response, NextFunction } from "express";
import { MyApp } from "../global"
import cors from 'cors';

const router = express.Router();


router.post("/base64", async (req: Request, res: Response) => {

    let item = req.body;

    await MyApp.pool.request()
        .input("Base64File", item.base64_file)
        .query(`
     INSERT INTO Master_File (Base64)
     SELECT @Base64File
    `);

    return res.status(200).send("Suscess");
});

router.get("/data/base64", async (req: Request, res: Response) => {
    let item = req.query
    const result = await MyApp.pool.request().input("Id", item.id).query(`
    SELECT * FROM Master_File WHERE Id = @Id
    `);
    return res.status(200).send(result.recordset);
});

export default router;