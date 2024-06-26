import { Client } from "../entity/client";

export interface ClientRepository {
    getAll(): Promise<Client[] | null>;
    createClient(
        nombre: string,
        apPaterno: string,
        apMaterno: string,
        edad: number,
        celular: string,
        password: string
    ): Promise<Client | null>;
}