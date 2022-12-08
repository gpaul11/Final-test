var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    "email":{
      "type": String,
      "unique": true
    },
    "password": String,
  });
var finalUsers = mongoose.model("finalUsers", UserSchema);
module.exports.startDB=function(){
    return new Promise((resolve, reject) => {
        resolve();
    })
}


module.exports.register=function(user){
    return new Promise((resolve, reject) => {
        if(user.email && user.password){
        
            if(user.email !=" " && user.password!=" ")
            resolve(user.email);
        }
        reject("email or password cannot be empty.")
    })
}


module.exports.signIn=function(user){
    return new Promise((resolve, reject) => {
        console.log("mail:");
        console.log(user.email);
        let mail=user.email+"";
        resolve(mail);
    })
}
