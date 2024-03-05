

function login(req, res, next){
const {userEMail, userPassword} = req.body;
console.log(`userEmail = ${userEMail}`, `userPassword = ${userPassword}`);
res.status(200).send();
}

export {login};