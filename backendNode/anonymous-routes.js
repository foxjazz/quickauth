var express = require('express'),
    quoter = require('./quoter');

var app = module.exports = express.Router();

var cradle = require('cradle');

var db = new(cradle.Connection)().database('members');

app.get('/api/random-quote', function(req, res) {
    res.status(200).send(quoter.getRandomOne());
});

app.get('/couchDataAll', function(req, res) {
    let test = db.all();
    res.status(200).send(db.all());
});
app.get('/couchGet', function(req, res) {

    res.status(200).send(db.cache.get(req.query.id));
});
app.post('/couchSave', function(req, res) {

    db.save(req.body._id, req.body.couchbody, function(err, res) {
        if (err)
            console.log(err.json());
        else {
            res.status(200);
            res.send('OK');
        }
    });


});