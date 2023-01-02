import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import {Product} from "../../Models/Product";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Post()
    async create(@Body() product: Product): Promise<Product> {
        return this.productsService.create(product);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() product: Product): Promise<void> {
        await this.productsService.update(id, product);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        await this.productsService.delete(id);
    }
}
