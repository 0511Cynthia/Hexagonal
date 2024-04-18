import { Request, Response } from "express";
import {GetEmployeeByIdUseCase} from "../../application/methodsEmployee/GetEmployeeByIdUseCase";

export class GetEmployeeByIdController{
    constructor (readonly getEmployeeByIdUseCase: GetEmployeeByIdUseCase){}

    async run(req: Request, res: Response){
        const id = req.params.id;
        const auxId = Number(id);

        if(!id ){
            return res.status(400).send({
                status: "error",
                message: "Id no encontrado",
            });
        }
        try{
            const result = await this.getEmployeeByIdUseCase.run(
                auxId
            );
            if(result){
                res.status(200).send({
                    status: "succes",
                    message: "Empleado encontrado",
                    data: result
                });
            }
        }catch(error){
            res.status(204).send({
                status: "error",
                message: error,
            });
        }
    }
}