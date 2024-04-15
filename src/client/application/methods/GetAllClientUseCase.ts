import { Client } from "../../domain/entity/client";
import { ClientRepository } from "../../domain/interface/clientRepository";

export class GetAllClientsUseCase {
    constructor(readonly clientRepository: ClientRepository) {}

    async run(): Promise<Client[] | null> {
        try {
            const result = await this.clientRepository.getAll();
            
            return result;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}