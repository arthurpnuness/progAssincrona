import { Request, Response, Router } from "express";
let array: {id:number, name:string, age: number}[] = []
const ex5Routes = Router();

const reverse=(str:string):string=>{
    return (str.split('').reverse().join(''));
}


ex5Routes.get('/reverse', (req:Request, res: Response)=>{
    const value=req.query.value;

    return res.status(200).send({original:value, worldReverse:reverse(value as string)});
});
export default ex5Routes;