const user = require('./user.model');


exports.create = (req, res)=>{
    const User = new user({
        email: req.body.email,
        password: req.body.password
    });

    User.save().then(
        (result)=>{
            console.log("RES",result);
            res.send({result})
        }
    )
    .catch(
        err => {
            console.log("ERR",err);
            res.status(500).send({err})
        }
    )
}