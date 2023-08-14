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