import { columnTypes, Repository, Database } from "expo-sqlite-orm";
import { DBNAME } from "../DBonfig";
export default class BaseModel {
  
  static get repository() {
    return new Repository(DBNAME, this.tableName, this.columnMapping);
  }
  static get tableName() {
    throw new Error("tableName not defined");
  }
  static get columnMapping() {
    return {};
  }
  static dropTable(){
    return this.repository.databaseLayer.executeSql(`DROP TABLE IF EXISTS ${this.tableName};`)
  };
}