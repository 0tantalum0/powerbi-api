import sql from "mssql";

export class MyApp {
  public static pool: sql.ConnectionPool;
  public static request(): sql.Request {
    return this.pool.request();
  }
  public static createConnectionPool(config: sql.config): Promise<sql.ConnectionPool> {
    this.pool = new sql.ConnectionPool(config);
    this.pool.on("error", (err) => {
      console.log("pool error", err);
    });
    return this.pool.connect();
  }
}
