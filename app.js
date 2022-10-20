require('dotenv').config()

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const nextApp = next({dev})
const handle = nextApp.getRequestHandler();



nextApp.prepare().then(()=>{
    const expressServer = express();

    expressServer.get("/", (req, res)=>{
        res.send("test content")
    })

    expressServer.all("/app/*", (req, res)=>{
        return handle(req, res);
    });


    expressServer.listen(port, ()=>{
        console.log(`>devunified server runing on port ${port}`);
    })
});