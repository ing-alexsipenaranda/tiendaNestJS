import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';



@Injectable()
export class ProductsService {

    private counterId=1;
    
    private products: Product[] =[
        {
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            price: 100,
            stock: 10,
            image: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description of Product 2',
            price: 200,
            stock: 20,
            image: 'https://example.com/image1.jpg',

        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Description of Product 3',
            price: 300,
            stock: 30,
            image: 'https://example.com/image1.jpg',

        },  
    ]

    findAll(): Product[] {
        return this.products;
    }
    findOne(id: number) {
        return this.products.find((item) => item.id === id);
    }
    create(payload:any){

        this.counterId = this.counterId + 1;
        const newProduct
         = {
           id: this.counterId,
              ...payload,
        }
        this.products.push(newProduct);
        return newProduct;
    }
    update(id: number, payload: any) {
      const product = this.findOne(id);
      if(product){
        const index = this.products.findIndex((item) => item.id === id);
        this.products[index] = {
          ...product,
          ...payload,
      };
      return this.products[index];
    }}
    delete(id: number) {
        const productIndex = this.products.findIndex((item) => item.id === id);
        if (productIndex === -1) {
            return null;
        }
        this.products.splice(productIndex, 1);
        return true;
    }
 


}
