import { columnTypes } from "expo-sqlite-orm";
import BaseModel from "./BaseModel";
import { DBTABLES } from "../DBonfig";
export class PersonalInfoModel extends BaseModel {

    static get tableName() {
        return DBTABLES.PersonalInfo;
    }
    static get columnMapping() {
        return {
            id: { type: columnTypes.INTEGER },
            full_name: { type: columnTypes.TEXT },
            carray_forward_leave: { type: columnTypes.TEXT },
            timestamp: { type: columnTypes.INTEGER, default: () => Date.now() }
        };
    }
}