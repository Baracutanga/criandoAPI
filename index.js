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

    return res.json(newUser);
})

app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.json("Usuário deletado com sucesso!")
})


// Nome e senha
// jambo
// q9w6qDoCZLcQ5wbO

mongoose.connect("mongodb+srv://jambo:q9w6qDoCZLcQ5wbO@users.rznqc.mongodb.net/?retryWrites=true&w=majority&appName=Users")
    .then( () => console.log("banco de dados conectado"))
    .catch( () => console.log("vish..."))

app.listen(3000);