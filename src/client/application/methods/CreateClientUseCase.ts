import { Client } from "../../domain/entity/client";
import { ClientRepository } from "../../domain/interface/clientRepository";
import { EncriptServiceHelper } from "../../infraestructure/helpers/EncriptServiceHelper";
// import { NotificationNewClientUseCase } from "../services/NotificationNewClientUseCase";

export class CreateClientUseCase {
    constructor (readonly clientReposiroty: ClientRepository, readonly encriptServiceHelper: EncriptServiceHelper) {}

    async run(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string,
        password: string
    ): Promise<Client | null> {
        let pass = this.encriptServiceHelper.encriptPassword(password);
        try {
            const client:any = await this.clientReposiroty.createClient(
                nombre,
                apPaterno,
                apMaterno,
                edad,
                celular,
                pass
            );
            
            return client;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}