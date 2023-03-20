import express, {Express} from 'express';
import cors from 'cors';
import ex2Routes from './ex2.routes';
import ex3Routes from './ex3.routes';
import ex4Routes from './ex4.routes';
import ex5Routes from './ex5.routes';
import ex6Routes from './ex6.routes';

const api : Express = express();
const port : any = process.env.PORT || 8081;

api.use(express.json());
api.use(cors());
api.use(ex2Routes, ex3Routes, ex4Routes, ex5Routes, ex6Routes); 

api.listen(port,()=>console.log(`Server running on port ${port}`));

//server running