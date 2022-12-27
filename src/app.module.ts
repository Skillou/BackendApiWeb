import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Product} from "../Models/Product";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { ProductsModule } from "./products/products.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'Skillou',
            password: 'rayanedu67',
            database: 'db_tp_skillou',
            entities: [Product],
            synchronize: true,
        }),
        ProductsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}