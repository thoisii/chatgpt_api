import express from "express";
import cors from 'cors'

import generate from "./generate.js";

const app = express();

app.use(express.json()) //parse body in a request
app.use(cors());

//setup port
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/generate", async (req,res) => {
    const queryDesc = req.body.queryDesc
    try {
        const sqlQuery = await generate(queryDesc)
        res.json({ responce: sqlQuery })

    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})