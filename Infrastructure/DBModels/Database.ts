
import {Sequelize} from "sequelize";


const sequelize = new Sequelize("auth_management", "root", '', {
    host: 'localhost',
    dialect: 'mysql'
});





export default class Database{

    constructor(){

    }


   async connect(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }

    getDb(){
        return sequelize;
    }

}

