import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class GetEmployeeByIdUseCase{
    constructor (readonly employeeRepository: EmployeeRepository){}
    
    async run(
        id: number
    ): Promise<any | null>{
        try{
            const result: any | null = await this.employeeRepository.getById(id);
            console.log("Datos de la consulta: ", result);
            return {
                id: result?.id,
                nombre: result?.nombre,
                apPaterno: result?.apPaterno,
                apMaterno: result?.apMaterno,
                edad: result?.edad,
                rol: result?.rol
            };
        }catch(error){
            console.log(error);
            return null;
        }
    }
}