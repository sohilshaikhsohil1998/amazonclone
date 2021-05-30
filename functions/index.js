//this is index file in function folder as src folder is full of frond end . and this function folder is full of backend we are going to write node js here not react js.

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
//express is framework of node js
const express  = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HuKt6BIe54tKOoyHldAthmHME5fhOzoULewuogmvJmKZSyYJKBfnJGUll13rpdVKHIND0I2lU56Ldp7UoM6gjIJ0037Ucn3Dm')

//API

// - App config
const app = express();

// - Middleware
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/',(request, response)=> response.status(200).send('hello'))
app.post('/payments/create',async(request, response) => {
    const total = request.query.total;
    console.log('payment request recive', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: 'used',
    });
    //ok
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Command
exports.api = functions.https.onRequest(app)


//example end points
//http://localhost:5001/clone-22057/us-central1/api