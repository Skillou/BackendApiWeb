import { Controller, Post, Body } from '@nestjs/common';
import { Client, SafeClient } from "../../Models/Client";
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(/* private readonly clientService: ClientService,  */private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() client: Client): Promise<SafeClient> {
    return this.authService.signup(client);
  }

  @Post('login')
  async login(@Body() client: Client): Promise<SafeClient> {
    return this.authService.login(client);
  }
}
