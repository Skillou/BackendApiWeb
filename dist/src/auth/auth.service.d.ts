import { Client, LoginClient, SafeClient } from "../../Models/Client";
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly clientRepository;
    constructor(clientRepository: Repository<Client>);
    signup({ password: createPassword, ...createSafeClient }: Client): Promise<SafeClient>;
    login({ login, password }: LoginClient): Promise<SafeClient>;
}
