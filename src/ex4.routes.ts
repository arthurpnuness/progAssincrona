import { Request, Response, Router } from "express";
 let array: {id:number, name:string, age: number}[] = []
const ex4Routes = Router();

ex4Routes.get('/exercise4', (req:Request, res: Response)=>{
    const {operator, number}=req.query
    const response={
        operator,
        number,
        result:0
    } 
    if(operator==='previous'){
        response.result=Number(number)-1
    }else{
        response.result=Number(number)+1
    }

    return res.status(200).json(response);
});

export default ex4Routes;