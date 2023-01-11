import { Repository } from 'typeorm';
import { Client } from "../../../Models/Client";
import { ConfigService } from '@nestjs/config/dist';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly clientRepository;
    constructor(configService: ConfigService, clientRepository: Repository<Client>);
    validate(login: string, password: string): Promise<any>;
}
export {};
