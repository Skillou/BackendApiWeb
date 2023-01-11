import { Client, SafeClient } from "../../Models/Client";
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(client: Client): Promise<SafeClient>;
    login(client: Client): Promise<SafeClient>;
}
