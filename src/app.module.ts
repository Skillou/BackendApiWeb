import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "../Models/Product";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { ClientModule } from "./client/client.module";
import { Client } from "../Models/Client";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "dpg-cdr2k8ta4991vasbae90-a.frankfurt-postgres.render.com",
      port: 5432,
      username: "cnam_d2ol_user",
      password: "ED8pWZBuwIWfwsrg8dArpBNzuX3eSgRZ",
      database: "db_skillou",
      entities: [Product, Client],
      synchronize: true, // mettre true si ça bug plus
      extra: {
        ssl: true
      }
    }),
    ProductsModule,
    ClientModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}