import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js';

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await User.find();

    return res.json(users)
});

app.post("/users", async (req, res) => {
    const user = req.body;

    const newUser = await User.create(user)

    return res.json("Usuário adicionado com sucesso!");
})

app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;

    const updateUser = await User.findByIdAndDelete(id);

    return res.json("Usuário deletado com sucesso!")
})

app.patch("/users/:id", async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    await User.findByIdAndUpdate(id, update, { new: true });

    return res.json("Usuário atualizado com sucesso")
})

app.listen(3000);