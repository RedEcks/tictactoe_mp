import express from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3001, ()=>{
    console.log("It's alive! port 3001")
})
