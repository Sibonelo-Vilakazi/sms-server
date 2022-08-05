const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const client = require('twilio')("ACd39465054c8c66cd6cdaab1a90357514", "fc99dc21f471bf4fbbc0eedd230e7887");
app.use(express.json());
app.use(cors())

app.get('/', (req, res) =>{
    res.send('Hello World')
    
})

app.get('/hello', (req, res) =>{
    sendTextMessage();
    res.send("Message is sent ")
})

app.post("/sendMessage", (req, res) =>{
    sendCustomMessage(req.body)
    res.send("Message is sent ")
})

function sendCustomMessage(data){
    client.messages
.create({
   body: data.messageText,
   from: '+15312025769',
   to: data.toNumber
 })
.then(message => console.log(message.sid));
 
}
function sendTextMessage(){

client.messages
.create({
   body: 'API REQUEST by MANQOBA ?',
   from: '+15312025769',
   to: '+27659734425'
 })
.then(message => console.log(message.sid));

}




app.listen(port, () =>{
    console.log(`Server listening at http:localhost:${port}`);
})