import { Request, Response, Router } from "express";
let array: {id:number, name:string, age: number}[] = []
const ex3Routes = Router();

let counter = 0;

const increment=()=>{
    counter++;
    if(counter===10){
        counter = 0;
        return 'Reached 10';
    }
    return counter;
};

ex3Routes.get('/exercise3', (req:Request, res: Response)=>{
    return res.status(200).json({ data: increment()});
});

export default ex3Routes;