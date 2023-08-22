const Tutorial = require("../model/tutorial.model")

exports.create = (req, res) => {
    res.send({massage: "create"});
};

exports.findAll = (req, res) => {
    const title =  req.query.title;
    
    Tutorial.getAll(title,  (err, data) => {
        if(err){
            res.status(500).send({
                message: err.meassage  || "Some error occurred0 "
            });
        }else{
            res.send(data); 
        }
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    res.send({message: "FindOne : "+id});
};

exports.findAllPublihed = (req, res) => {
    res.send("FindAllPublished");
};

exports.update = (req, res) => {
    res.send("update");
};

exports.delete = (req, res) => {
    res.send("delete");
};

exports.deleteAll = (req, res) => {
    res.send("DeleteAll ");
};

