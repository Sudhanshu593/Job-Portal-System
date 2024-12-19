export default class RecruiterModel{

    constructor(id,name,email,pswd){
        this.id = id,
        this.name = name,
        this.email = email,
        this.pswd = pswd
    }

   static addRec(name,email,pswd){
        let newrec = new RecruiterModel(
            recruiters.length+1,
            name,
            email,
            pswd
        )
        recruiters.push(newrec)
    }

    static isValidLogin(email,pswd){
       const user = recruiters.find(rec => rec.email==email && rec.pswd==pswd)
        if(user){
            return user.name
        }
        else{
            return false
        }
    }
}

export var recruiters = []