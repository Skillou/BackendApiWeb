import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOneOptions } from 'typeorm';
import {Product} from "../../Models/Product";

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async findOne(id: number): Promise<Product> {
        return this.productRepository.findOneBy({ id });
    }

    async create(product: Product): Promise<Product> {
        return await this.productRepository.save(product);
    }

    async update(id: string, product: Product): Promise<void> {
        await this.productRepository.update(id, product);
    }

    async delete(id: string): Promise<void> {
        await this.productRepository.delete(id);
    }
}
