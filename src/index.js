import express from 'express'
import { PrismaClient } from "@prisma/client";
import errorHandler from './util/errorHandler.js'
import AppError from './util/AppError.js'

const app = express();
const db = new PrismaClient();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hi there!");
})

app.get("/users", async (req, res) => {
    const users = await db.user.findMany();
    res.json(users)
});

app.post("/users", async (req, res, next) => {
    const data = req.body;

    try {
        if (!data.name || !data.lastname || !data.email) {
            throw new AppError("Missing fields", 406);
        }

        const newUser = await db.user.create({
            data
        });

        res.json({
            message: "User created succesfully",
            user: newUser
        })
    } catch (err) {
        next(err);
    }

});

app.put("/users", async (req, res, next) => {
    try {
        const { id, data } = req.body;

        if (!id, !data) throw new AppError("You must pass an user id and the new data", 406)

        const updatedUser = await db.user.update({
            where: {
                id,
            },
            data
        })

        res.json({
            message: "User updated succesfully",
            user: updatedUser
        })
    } catch (err) {
        next(err);
    }
});

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});