const fs = require('fs')
const express = require('express')
const { deflateSync } = require('zlib')
const app = express()
const port = 3000


app.get('/os',(req, res)=> {
  res.send(os.hostname()+" port "+port);
})


var mois = new Date();
var jour = new Date();

mois = mois.getMonth();
jour = jour.getDate();

console.log("jour = "+ jour +" et mois = "+ mois);

// Génération du mot

let fichier = fs.readFileSync('data/liste_francais_utf8.txt','utf8');

const nbMot = 22740;

mot = (jour*mois*100000)%nbMot;

let dico=fichier.split('\n');
var guess= "";
tmp = dico[mot];
for(i=0;i<tmp.length-1;i++){
    guess+=tmp[i];
}





app.use("/", express.static(__dirname + '/www'))

app.get('/', (req, res) => {
  res.send(path.join( __dirname + '/www', 'index.html'));
})

app.get("/mot",(req, res) => {
    res.send(guess)
})


app.get("/login",(req, res) => {
  res.send("login.html");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})