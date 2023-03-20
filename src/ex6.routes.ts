import { Request, Response, Router } from "express";
let array: string[] = [];
const ex6Routes = Router();

ex6Routes.get('/remove', (req:Request, res: Response)=>{
    const value = req.query.value;
    const remove = String (value).replace(/[aeiou]/gi, "")
    array.push(remove);

    return res.status(200).send({world:value, revVowels: remove, array});
});

export default ex6Routes;