import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Client } from "../../Models/Client";
import { ClientService } from "./client.service";

@Controller('clients')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async findAll(): Promise<Client[]> {
    return await this.clientService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Client> {
    return this.clientService.findOne(id);
  }

  @Post()
  async create(@Body() client: Client): Promise<Client> {
    return await this.clientService.create(client);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() client: Client): Promise<void> {
    await this.clientService.update(id, client);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.clientService.delete(id);
  }
}
