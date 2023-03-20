import { Request, Response, Router } from "express";

//let array: {id:number, name:string, age: number}[] = []
 
const ex2Routes = Router();

//ex2Routes.get('/exercise2', (req:Request, res: Response)=>{
//    return res.status(200).send({id:1, message:'everything is going as code'});
//});

//ex2Routes.post('/exercise2', (req:Request, res: Response)=>{
//    const {id,name,age}: {id:number, name:string, age: number} =req.body
//    array.push({id,name,age});
//    return res.status(200).send({ok:true, message:'everything is going as code'});
//});

//ex2Routes.get('/exercise2/users', (req:Request, res: Response)=>{
//    return res.status(200).send(array);
//});

//export default ex2Routes

ex2Routes.get('/calculator', (req:Request, res: Response)=>{
    const operation= req.query.operation
    const {valueA,valueB}=req.query 
    let result
    switch (operation) {
        case 'add':
            result = Number(valueA)+Number(valueB)
            return res.status(200).json({number1:valueA, number2:valueB, operation, result});
        case 'subtraction':
            result = Number(valueA)-Number(valueB)
            return res.status(200).json({number1:valueA, number2:valueB, operation, result});
        case 'multiplication':
            result = Number(valueA)*Number(valueB)
            return res.status(200).json({number1:valueA, number2:valueB, operation, result}); 
        case 'division':
            result = Number(valueA)/Number(valueB)
            return res.status(200).json({number1:valueA, number2:valueB, operation, result});    

        default:
            return res.status(418).end()
    }
});

export default ex2Routes;