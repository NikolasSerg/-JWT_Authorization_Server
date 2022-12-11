const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./router/index')

const app = express()

const PORT = process.env.PORT || 7000

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async() => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`server was started on ${PORT} port`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()