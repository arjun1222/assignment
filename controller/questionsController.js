const Question= require("../models/questionModel")
var randomstring = require("randomstring");
 


exports.showAllQuestions=(req, res)=>{

    Question.find()
    .then(result => res.json(result))
    .catch(err => res.status(404).json({ success: false }));

}

exports.updateQuestion=(req, res)=>{
    var query = {'qid': req.body.qid};
    var newData= {}
    var body=req.body;
    for (var key in body) {
        if (body.hasOwnProperty(key)) {
            console.log(key + " -> " + body[key]);
            newData[key]=body[key]
        }
    } 
    Question.findOneAndUpdate(query, newData, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully updated.');
    });
}

exports.addQuestion=(req, res)=>{
    const qid=randomstring.generate();
    var query = {'qid': qid};
    var newData= {"qid":qid, "title": req.body.title, "body":req.body.body, "subject":req.body.subject}
    Question.findOneAndUpdate(query, newData, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send({"qid":qid, "message":"successfully added"});
    });
}


exports.deleteQuestion=(req, res)=>{
    var query = {'qid': req.body.qid};

    Question.deleteMany(query, function (err) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully deleted.');
      });
      
}


