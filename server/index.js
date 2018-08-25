const express = require("express");
const app = express();
const path = require("path");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_KEY);

const PORT = process.env.PORT || 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use("/api/email", async function(req, res){
    try {
        const { to, from, subject, text } = req.body;
        const msg = {
            to,
            from,
            subject,
            text
        };
        sgMail.send(msg).then(() => res.status(200).json("Email sent successfully!"));
    } catch(error) {
        return res.status(400).json("Sorry, something went wrong. Try again later!");
    }
});

const appPath = path.join(__dirname, "..", "build");
app.use(express.static(appPath));
app.get("*", function(req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
});

app.listen(PORT, function() {
    console.log("Server is Running");
});