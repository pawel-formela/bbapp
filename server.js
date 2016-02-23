var express = require('express'),
mongo = require('mongodb'),
MongoClient = mongo.MongoClient,
app = express(),
dbUrl = 'mongodb://localhost:27017/videoRental';

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {

    res.sendFile('index.html');

});

app.get("/movies", function (req, res) {

    var limit = parseInt(req.query.limit, 10);

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({ error: true });
            return
        }

        db.collection("movies").find({}, { limit: limit }).toArray(function (err, docs) {

            if (err) {
                res.status(500);
                res.json({ error: true });
                return;
            }

            res.json(docs);
            db.close();
        });

    });

});

app.get("/actors", function (req, res) {

    var limit = parseInt(req.query.limit, 10);

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({ error: true });
            return
        }

        db.collection("actors").find({}, { limit: limit }).toArray(function (err, docs) {

            if (err) {
                res.status(500);
                res.json({ error: true });
                return;
            }

            res.json(docs);
            db.close();
        });

    });

});

app.get("/categories", function (req, res) {


    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({ error: true });
            return
        }

        db.collection("categories").find({}).toArray(function (err, docs) {

            if (err) {
                res.status(500);
                res.json({ error: true });
                return;
            }

            res.json(docs);
            db.close();
        });

    });

});

app.get("/clients", function (req, res) {

    var limit = parseInt(req.query.limit, 10);

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({ error: true });
            return
        }

        db.collection("actors").find({}, { limit: limit }).toArray(function (err, docs) {

            if (err) {
                res.status(500);
                res.json({ error: true });
                return;
            }

            res.json(docs);
            db.close();
        });

    });

});

app.get("/movie/:id", function(req, res) {
    console.log(req.params.id);

    var id = req.params.id,
    isValid = mongo.ObjectID.isValid(id);
    console.log(isValid);
    if(!isValid) {
        res.status(500);
        res.json({error: true});

        return;
    }

    MongoClient.connect(dbUrl, function(err, db) {

        if(err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("movies").find({_id: new mongo.ObjectID(id)}).toArray(function(err, docs) {

            if(err) {
                res.status(500);
                res.json({error: true});

                return;
            }

            res.json(docs[0]);

            var movie = docs[0];

            

        });

    });

});


app.listen('8001', function () {

    console.log('serwer aktywny');

})