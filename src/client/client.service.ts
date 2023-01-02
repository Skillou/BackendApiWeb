import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from "../../Models/Client";

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async findAll(): Promise<Client[]> {
    return await this.clientRepository.find();
  }

  async findOne(id: number): Promise<Client> {
    return this.clientRepository.findOneBy({ id });
  }

  async create(client: Client): Promise<Client> {
    return await this.clientRepository.save(client);
  }

  async update(id: string, product: Client): Promise<void> {
    await this.clientRepository.update(id, product);
  }

  async delete(id: string): Promise<void> {
    await this.clientRepository.delete(id);
  }
}
