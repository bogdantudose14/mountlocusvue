const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;
var firebase = require('firebase');
const firebaseConfig = require('./firebaseConfig.json');

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db = firebase.initializeApp(firebaseConfig);

// var db = admin.database();
// var goodref = db.ref('/turisti');

const database = db.database();

const touristsRef = firebase.database().ref('turisti/');

// listen on the port
app.listen(port);

app.get('/', (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

app.get('/tourists', (req, res) => {
  tourists = {};
  database.ref('/turisti').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      refKey = childSnapshot.key;
      tourists[refKey] = childSnapshot.val();
    });
    res.send({ tourists });
  });
});

app.get('/tourists/:touristid', (req, res) => {
  console.log(req.params.touristid);
  tourist = {};
  database
    .ref(`/turisti/${req.params.touristid}`)
    .once('value', function(snapshot) {
      console.log('SNAPSHOT', snapshot.val());
      tourist = snapshot.val();
      res.send({ tourist });
    })
    .catch(err => console.log(err.message));
});

app.delete('/tourists/:touristid', (req, res) => {
  console.log(req.params.touristid);
  tourist = {};
  database
    .ref(`/turisti/${req.params.touristid}`)
    .remove()
    .then(res.send('User deleted successfully !'))
    .catch(function(error) {
      console.log('Remove failed: ' + error.message);
    });
});
