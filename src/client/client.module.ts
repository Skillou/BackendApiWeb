import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from "./client.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Client } from "../../Models/Client";

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
