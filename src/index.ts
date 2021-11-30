import express from "express";
import sql from "mssql";
import { MyApp } from "./global";
import { NodeRoutes } from "./router"
import cors from 'cors';

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

var config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: 'localhost',
    database: 'Demo',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        useUTC: false,
        enableArithAbort: true,
        encrypt: true,
        trustServerCertificate: true,
        abortTransactionOnError: false,
    },
};

app.get("/", (req: express.Request, res: express.Response) => {
    res.status(200).send("Welcome Node Js")
});


NodeRoutes(app);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);

    (async () => {
        try {
            await MyApp.createConnectionPool({
                server: config.server,
                user: config.user,
                password: config.password,
                database: config.database,
                options: {
                    useUTC: false,
                    enableArithAbort: true,
                    encrypt: true,
                    trustServerCertificate: true,
                    abortTransactionOnError: false,
                },
            });

            console.log(`sql connected`);


        } catch (error) {
            console.error(error);
        }
    })();
});
