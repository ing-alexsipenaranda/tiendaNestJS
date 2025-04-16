import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {


    @Get('')
    getCategories(){
        return {
            message: 'Categories list',
        }
    }

    @Get(':id/products/:productId')
    getCategory(@Param('productId') productId:string,@Param('id') id:string) {
      return `Product ${productId} and the category is ${id}`;
    } 
    @Post()
    create(@Body() payload:any){
        return{
            message: 'Category created',
            payload,
        };

    }
  
}


