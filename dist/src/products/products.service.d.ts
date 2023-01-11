import { Repository } from 'typeorm';
import { Product } from "../../Models/Product";
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<void>;
    delete(id: string): Promise<void>;
}
