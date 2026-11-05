import express from 'express';
import cors from 'cors';
import blogRoutes from './routes/blogRoutes.js';
import userRoutes from './routes/userRoutes.js'

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

//Rotas
app.use('/blog', blogRoutes);
app.use('/users', userRoutes);

//Server
const port = 3000;
app.listen(port, ()=>{
    console.log(`SERVIDOR RODANDO NA PORTA ${port}`)
});