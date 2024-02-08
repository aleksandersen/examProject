import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class User {

    constructor() {
        ///TODO: Are these the correct fields for your project?
        this.email;
        this.pswHash;
        this.name;
    }

}

export function ReqUserLogin(aResponce){
    const joinName = join(__dirname, '../public/login.html');
    aResponce.sendFile(joinName);
}

export default {User};