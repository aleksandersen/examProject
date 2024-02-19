import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import DBManager from "./storageManager.mjs";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class User {

    constructor() {
        ///TODO: Are these the correct fields for your project?
        this.email;
        this.pswHash;
        this.name;
        this.id;
    }

    async save() {

        /// TODO: What happens if the DBManager fails to complete its task?
    
        // We know that if a user object dos not have the ID, then it cant be in the DB.
        if (this.id == null) {
          return await DBManager.createUser(this);
        } else {
          return await DBManager.updateUser(this);
        }
      }
    
      delete() {
    
        /// TODO: What happens if the DBManager fails to complete its task?
        DBManager.deleteUser(this);
      }

}

export function ReqUserLogin(aResponce){
    const joinName = join(__dirname, '../public/login.html');
    aResponce.sendFile(joinName);
}

export default {User};

//-----------------


 

 


