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
                id: result[0].id,
                nombre: result[0].nombre,
                apPaterno: result[0].apPaterno,
                apMaterno: result[0].apMaterno,
                edad: result[0].edad,
                rol: result[0].rol
            };
        }catch(error){
            console.log(error);
            return null;
        }
    }
}