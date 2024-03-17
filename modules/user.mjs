import DBManager from "./storageManager.mjs";

export class User {

    constructor() {
        this.email;
        this.password;
        this.name;
        this.id;
    }

    async save() {
   
        if (this.id == null) {
          return await DBManager.createUser(this);
        } else {
          return await DBManager.updateUser(this);
        }
      }
    
      delete() {
            DBManager.deleteUser(this);
      }

}


export default {User};

//-----------------


 

 


