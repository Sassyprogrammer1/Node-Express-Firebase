const db = require('../db/connection');


const functionsObject = {
   
    //register a user
    async register(req,res,next){

        let userObject = {name:req.body.name,email:req.body.email,country:req.body.country};
        var insert = await db.ref('/users').push(userObject);
        return res.send(insert);


    },

    //update a user record
    async update(req,res,next){

        let updateObject = {name:req.body.name,email:req.body.email,country:req.body.country};
        var snapshot = db.ref(`/users/${req.body.id}`);
        const newSnapshot = await snapshot.update(updateObject);
        return res.send(newSnapshot);


    },

    //find all users record
    async getAll(req,res,next){

        let snapshot = db.ref('/users');
        const newSnapshot = await snapshot.once("value");
        return res.send(newSnapshot);

    },

    //find a record by userId
    async getOne(req,res,next){

        let snapshot = db.ref(`/users/${req.params.id}`)
        const newSnapshot = await snapshot.once("value");
        return res.send(newSnapshot);
    },

    //delete a record
    async delete(req,res,next){

        let snapshot = db.ref(`/users/${req.params.id}`)
        const newSnapshot = await snapshot.remove();
        return res.send(newSnapshot);
    }

}

module.exports = functionsObject




