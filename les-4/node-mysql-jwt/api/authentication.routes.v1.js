//
// ./api/authentication.routes.v1.js
//
var express = require('express');
var router = express.Router();

var auth = require('../auth/authentication');

//
// Hier gaat de gebruiker inloggen.
// Input: username en wachtwoord
// ToDo: 
//	 - zoek de username in de database, en vind het password dat opgeslagen is
// 	 - als user gevonden en password matcht, dan return valide token
//   - anders is de inlogpoging gefaald - geef foutmelding terug.
//
router.post('/login', function(req, res) {

    // Even kijken wat de inhoud is
    console.dir(req.body);

    // De username en pwd worden meegestuurd in de request body
    var username = req.body.username;
    var password = req.body.password;

    // Dit is een dummy-user - die haal je natuurlijk uit de database.
    var _dummy_username = "test";
    var _dummy_password = "test";

    // Kijk of de gegevens matchen. Zo ja, dan token genereren en terugsturen.
    if (username == _dummy_username && password == _dummy_password) {
        res.status(200).json({
            "token": auth.encodeToken(username),
            "username": username
        });
    } else {
        res.status(401).json({ "error": "Invalid credentials, bye" })
    }

});

// Hiermee maken we onze router zichtbaar voor andere bestanden. 
module.exports = router;