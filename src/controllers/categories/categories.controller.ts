import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriesService } from 'src/services/categories/categories.service';

@Controller('categories')
export class CategoriesController {

    constructor(
        private categoriesService: CategoriesService
    ) {}
    @Get('')
    getCategories(){
        return this.categoriesService.findAll();
    }

    @Get(':id/products/:productId')
    getCategory(@Param('productId') productId:string,@Param('id') id:string) {
      return `Product ${productId} and the category is ${id}`;
    } 
    @Post()
    create(@Body() payload:any){
        return this.categoriesService.create(payload);

    }
    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
        return this.categoriesService.update(id, payload);
    }
    @Delete(':id') 
    delete(@Param('id') id:number){ 
            return  this.categoriesService.delete(id);
           
    }
  
}


