import { Client } from "../../Models/Client";
import { ClientService } from "./client.service";
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    create(client: Client): Promise<Client>;
    update(id: string, client: Client): Promise<void>;
    delete(id: string): Promise<void>;
}
