const ApiError = require("../api-error");
const MongoDB = require("../utils/mongodb.util");
const ContactService= require("../services/contact.service");

exports.create = (req, res) => {
    res.send({message :"create handler"});
};

exports.findAll = (req, res) => {
    res.send({ message:"findAll handler" });
};

exports.finOne = (req, res) => {
    res.send({ message:"findOne handler" })
}
exports.update = (req, res) => {
    res.send({ message:"update handler" })
}

exports.delete = (req, res) => {
    res.send({ message:"delete handler" })
}

exports.deleteALL = (req, res) => {
    res.send({ message:"deleteALL handler" })
}

exports.findAllFaforite = (req, res) => {
    res.send({ message:"findAllFaforite handler" })
}

// Create and save a new contact
exports.create = async () =>{
    if(!req.body?.name){
        return next(new ApiError (400, "Name can not be empty")
        )
    }
    try {
        const ContactService=new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        new ApiError(500, "An error occurred while creating the contact")
    }
};