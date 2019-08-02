const Profile = require('../models/Profile.model')
module.exports.create = (req, res)=>{
    const data = JSON.parse(req.fields.data);
    const newProfile = new Profile({
        ...data,
        avatar: req.fields.file 
    });
    newProfile.save()
        .then((profile)=>res.json(profile))
        .catch(err=>console.log(err))
};
module.exports.getAllProfiles = (req, res)=>{
    Profile.find()
        .then(profiles=>res.json(profiles))
        .catch(errs=>console.log(errs))
};
module.exports.getProfileById = (req, res)=>{
    Profile.findById(req.params.id)
        .then(profile=>res.json(profile))
        .catch(err=>console.log(err))
}