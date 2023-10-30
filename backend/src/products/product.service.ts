import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,

    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: Repository<Category>,
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const { category_id, ...productDto } = createProductDto;

    const category = await this.categoryRepository.findOneOrFail({ where: { id: category_id } });

    const product: Product = {
      id: undefined,
      ...productDto,
      promotionalPrice: this.calculatePromotionalPrice(productDto.price, category.discount),
      category,
      created_at: undefined,
      updated_at: undefined,
      deleted_at: undefined
    };

    return await this.productRepository.save(product);
  }

  private calculatePromotionalPrice(price: number, discount: number): number {
    return Math.round(price * (1 - discount / 100) * 100) / 100;
  }

}

