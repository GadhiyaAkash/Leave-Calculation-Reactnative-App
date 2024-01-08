import { columnTypes } from "expo-sqlite-orm";
import BaseModel from "./BaseModel";
import { DBTABLES } from "../DBonfig";
export class ProceduresModel extends BaseModel {

    static get tableName() {
        return DBTABLES.LEAVEHISTORY;
    }
    static get columnMapping() {
        return {
            id: { type: columnTypes.INTEGER },
            month: { type: columnTypes.INTEGER },
            cl_taken: { type: columnTypes.TEXT },
            pl_taken: { type: columnTypes.TEXT },
            timestamp: { type: columnTypes.INTEGER, default: () => Date.now() }
        };
    }
}