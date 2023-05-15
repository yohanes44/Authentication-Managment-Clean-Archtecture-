
import {Sequelize} from "sequelize";


const sequelize = new Sequelize("auth_management", "root", '', {
    host: 'localhost',
    dialect: 'mysql'
  });




// export default class Records {

//     private readonly Data
//     constructor(data: any){
//         this.data = data;
//         this.count = this.data.length;
//     }

// } 