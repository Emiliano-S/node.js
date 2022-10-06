import express from 'express';
import 'express-async-errors';

const app = express();
app.use(express.json())

app.get('/planets', (request, response) => {
    response.json([
        {name: "Mercury"},
        {name: "Venus"}
    ]);
});

app.post('/planets', (request, response) =>{
    const planet = request.body;

    response.status(201).json(planet);
})


export default app;