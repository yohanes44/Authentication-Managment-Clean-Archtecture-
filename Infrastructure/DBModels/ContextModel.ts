import DBTable from "./DBTable";
import Database from "./Database";

export default class ContextModel {

    private readonly Database;

    constructor(db: any){
        this.Database = db;
    }

 

   public getTable<T>(name: string, pk = "id") {

      return new DBTable(this.Database, name, pk);
   }

    async beginTransaction(name: string): Promise<void> {
        await this.Database.savePoint(name);
    }

    async rollbackTransaction(name: string): Promise<void> {
        await this.Database.rollback(name);
    }
    
    async commitTransaction(name: string): Promise<void> {
        await this.Database.releaseSavePoint(name);
    }

    async savePoint(name: string): Promise<void> {
        await this.Database.savePoint(name);
    }

    async reverse(): Promise<void> {
        await this.Database.reverse();
    }

}