import { Repository } from 'typeorm';
import { Client } from "../../Models/Client";
export declare class ClientService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<Client>);
    findAll(): Promise<Client[]>;
    findOne(id: number): Promise<Client>;
    create(client: Client): Promise<Client>;
    update(id: string, product: Client): Promise<void>;
    delete(id: string): Promise<void>;
}
