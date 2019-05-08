const bcrypt = require("bcryptjs");
const db = require("../models");

app.post("/signup", (req,res)=>{
bcrypt.hash(req.body.password, 10,(err, hash)=>{
    if(err){
        return res.status(500).json({
            error: err
        })
    } else { 
        db.User.create({
            email: req.body.email,
            password: hash
          })
    }
})
})