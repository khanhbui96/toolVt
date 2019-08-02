const Time = require('../models/Time.model')
module.exports.create = (req, res)=>{
    const data = JSON.parse(req.fields.data);
    const newProfile = new Profile({
        ...data
    });
    newProfile.save()
        .then((profile)=>res.json(profile))
        .catch(err=>console.log(err))
};
module.exports.getAllTime = (req, res)=>{
    Profile.find()
        .then(profiles=>res.json(profiles))
        .catch(errs=>console.log(errs))
};
module.exports.getTimeById = (req, res)=>{
    Profile.findById(req.params.id)
        .then(profile=>res.json(profile))
        .catch(err=>console.log(err))
}