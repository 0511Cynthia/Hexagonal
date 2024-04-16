import { Employee } from "../../domain/entity/Employee";
import { EmployeeRepository } from "../../domain/interface/EmployeeRepository";

export class GetEmployeeByIdUseCase{
    constructor (readonly employeeRepository: EmployeeRepository){}
    
    async run(
        id: string
    ): Promise<Employee | null>{
        try{
            const result: Employee | null = await this.employeeRepository.getById(id);
            console.log("Datos de la consulta: ", result);
            return result;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}