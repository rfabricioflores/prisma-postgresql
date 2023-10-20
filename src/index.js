import express from 'express'
import { PrismaClient } from "@prisma/client";


const app = express();
const db = new PrismaClient();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hi there!");
})

app.get("/users", async (req, res) => {
    const users = await db.user.findMany()
    res.json(users)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})