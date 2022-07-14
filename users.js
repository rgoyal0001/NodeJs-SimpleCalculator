const users=[]

function validator(req,res,next){
    const body = req.body;

    if(!body.user){
        return res.status(400).send(`Please provide correct details...`)
    }
    if(!body.user.first_Name){
        return res.status(400).send(`First Name is required...`)
    }
    if(!body.user.last_Name){
        return res.status(400).send(`Last Name is required...`)
    }
    if(!body.user.email.includes('@') || !body.user.email.includes('.com')){
        return res.status(400).send(`Enter correct email...`)
    }
    if(!body.user.pincode.length === 6){
        return res.status(400).send(`Invalid pincode...`)
    }
    if(!(body.user.age >0 && body.user.age <= 100)){
        return res.status(400).send(`Age must be from 1 to 100`)
    }
    if(!(body.user.gender === 'Male' || body.user.gender === 'Female' || body.user.gender === 'Other' )){
        return res.status(400).send(`Gender can be Male/ Female/ Other`)
    }

    next();
}

function registerUser(req,res){
    const {user}=req.body;
    let userData={
       id: users.length+1,
       Name: user.first_Name + " " + user.last_Name,
       email: user.email
       
    }
   users.push(userData);
   res.status(200).send(`Registered Successfully`);

}

function getUsers(req,res){
    res.status(200).send(users);
}

module.exports={
    validator,
    registerUser,
    getUsers
}