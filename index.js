import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import Routes from './src/routes'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import rateLimit from 'express-rate-limit'
import xss from 'xss-clean'
import helmet from 'helmet'

const app = express()
const PORT = process.env.PORT || 4000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ecomm-service-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body parser set up
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// const corsOptions = {
//     origin: 'http://localhost',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
//INCOMING DOMAIN LIST HEAR
// app.use(cors({ origin: 'http://localhost:8080' , credentials :  true}))
app.use(cors({ origin: 'https://e-commapp.netlify.app' , credentials :  true}))

//=======================
//      O W A S P
//=======================
app.use(mongoSanitize())

// SIGN UP should not have this limit in real scenario
const limit = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000, // 1 hour of lock down
    message: 'Too many request'
})

app.use(express.json({limit: '10kb'})) // body limit is 10kb
app.use(xss())
app.use(helmet())
app.use('/signup/', limit)
app.use('/placeOrder/', limit)
app.use('/', Routes)

app.listen(PORT, () => {
    if(!!process.env.PORT) {
        console.log(`Your Server is UP on ${PORT}`)
    }
    console.log(`http://localhost:${PORT}/`)
})