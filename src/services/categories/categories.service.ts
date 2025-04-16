import { Injectable } from '@nestjs/common';
import { Categories } from 'src/entities/categories.entity';

@Injectable()
export class CategoriesService {

    private counterId = 1;

    private categories: Categories[] = [
        {
            id: 1,
            name: 'Category 1',
            image: 'https://example.com/image1.jpg',
        },
        {
            id: 2,
            name: 'Category 2',
            image: 'https://example.com/image2.jpg',
        },
        {
            id: 3,
            name: 'Category 3',
            image: 'https://example.com/image3.jpg',
        },
    ]
      findAll(): Categories[] {   
        return this.categories;
      }
      findOne(id: number) {
        return this.categories.find((item) => item.id === id);  
      }
      create(payload: any) {
        this.counterId = this.counterId + 1;
        const newCategory = {
            id: this.counterId,
            ...payload,
        };
        this.categories.push(newCategory);
        return newCategory;
    }
        update(id:number,payload:any){
            const category = this.findOne(id);
            if(category){
                const index = this.categories.findIndex((item) => item.id === id);
                this.categories[index] = {
                    ...category,
                    ...payload,
                };
           return this.categories[index];}
            
        }
        delete(id:number){
            const index = this.categories.findIndex((item) => item.id === id);
            if(index !== -1){
                return null;
            }
            this.categories.splice(index, 1);
            return { message: `Category with id ${id} deleted` };
        }

}
