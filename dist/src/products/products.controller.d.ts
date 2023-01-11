import { ProductsService } from './products.service';
import { Product } from "../../Models/Product";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: string, product: Product): Promise<void>;
    delete(id: string): Promise<void>;
}
