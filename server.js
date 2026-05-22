const express = require('express');
const path = require('path'); 
const app = express();

// Sørger for at serveren finner style.css og klarer å lese tekst som blir sendt
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

// Sender index.html med en gang noen åpner siden
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Mottak av rapporten (Svarer nå lydløst med status 200 OK)
app.post('/rapporter', (req, res) => {
    const melding = req.body.problemMelding;
    
    console.log("⚠️ NY RAPPORT MOTTATT:");
    console.log(melding);
    console.log("------------------------");
    
    res.sendStatus(200); // Forteller nettleseren at alt gikk bra
});

// Starter serveren på port 3000
app.listen(80, () => {
    console.log("Serveren kjører på http://192.168.20.164:443");
});






// Starter serveren på port 3000







//app.listen(3000, () => {
//const PORT = 3000;
//app.listen(PORT, '0.0.0.0', () => {
//    console.log("Serveren kjører på http://192.168.1.80:3000");
//});

//const PORT = 3000;
//app.listen(PORT, '0.0.0.0', () => {
//    console.log("Serveren kjører! Gå til http://<din-pi-ip>:{PORT}");
//});