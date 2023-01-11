import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Client, LoginClient, SafeClient } from "../../Models/Client";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(Client) private readonly clientRepository: Repository<Client>) {}

  async signup({ password: createPassword, ...createSafeClient }: Client): Promise<SafeClient> {
    const createClient = {...createSafeClient, password: await hash(createPassword, 10)}
    const { password, ...safeClient } = await this.clientRepository.save(createClient);
    return safeClient;
  }
  
  async login({ login, password }: LoginClient): Promise<SafeClient> {
    const { password: clientPassword, ...safeClient } = await this.clientRepository.findOneBy({ login });
    if (!safeClient) throw new NotFoundException();
    if (await compare(password, clientPassword)) {
      return safeClient;
    }
    throw new UnauthorizedException();
  }

  // createToken({ login, isAdmin }: Client): { access_token: string } {
  //   return {
  //     access_token: 'coucou'// this.jwtService.sign({ login, isAdmin }),
  //   };
  // }

  // async validateUser(payload: any): Promise<any> {
    // Put some validation logic here
    // for example query user by id/email from database
    // and check if the user with this id/email exists
  // }
}
