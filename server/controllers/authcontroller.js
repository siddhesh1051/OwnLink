const User = require("../model/authmodel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,
        {expiresIn:3*24*60*60})
}


module.exports.register = async (req, res) => {
    try{
        const {email,password}  = req.body;
        const user = await User.create({email,password});
        const token = createToken(user._id);
        res.status(201).json({user,token});
    }
    catch(err){
        
        res.status(400).json({err});
    }
}

module.exports.login = async (req, res) => {
    try{
        const {email,password}  = req.body;
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    }
    catch(err){
        res.status(400).json({err});
    }
}

module.exports.addUsername = async (req, res) => {
    
}
module.exports.addName = async (req, res) => {
    
}
module.exports.addBio = async (req, res) => {
    
}

module.exports.addLink = async (req, res) => {
   
}
module.exports.addSocial = async (req, res) => {
   
}



