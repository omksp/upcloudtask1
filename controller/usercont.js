const UserModel = require('./../model/user');


const updateDocument = async(emailid) =>{
    result = await UserModel.updateOne({email:emailid},{$set:{verified: true}});
};

const createuser = async(req) =>{
    const newuser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password:req.body.password,
        verified:false
    });
    newuser.save();
};
const getIdOfUser = async(emailid) =>{
    result = await UserModel.find({email :emailid},{_id:1})
    return result;
}

module.exports = {updateDocument,createuser,getIdOfUser};
