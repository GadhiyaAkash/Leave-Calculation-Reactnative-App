import { Migrations, Database, sql } from "expo-sqlite-orm";
import { DBNAME, DBTABLES } from "../DBonfig";

const statements = {
    "00000001_create_leavehistory":
        sql` CREATE TABLE IF NOT EXISTS ${DBTABLES.LEAVEHISTORY} 
        (
            id INTEGER PRIMARY KEY NOT NULL,
            month TEXT NOT NULL,
            cl_taken TEXT NOT NULL,
            pl_taken TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        );`,
    "00000001_create_personalinfo":
        sql` CREATE TABLE IF NOT EXISTS ${DBTABLES.PersonalInfo} 
        (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            carray_forward_leave TEXT NOT NULL,
            timestamp INTEGER NOT NULL
        );`
};

export class DBMigrations {
    database;
    constructor() {
        this.database = Database.instance(DBNAME);
    }
    static async migrate() {
        const migrations = new Migrations(DBNAME, statements);
        console.log("Database migration done");
        return await migrations.migrate();
    }
}