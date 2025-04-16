import { Controller, Get, Query, 
    Param, Post,Body, Put, Delete,
    HttpStatus, HttpCode} from '@nestjs/common';

import { ProductsService} from './../../services/products/products.service';
import { CreateProductDto } from 'src/dtos/products.dtos';  

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService
    ) {}
    @Get('')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset =0,
        @Query('brand') brand:string
    ){
        return this.productsService.findAll();
      //      message: `Products limit=> ${limit} offset=>${offset} brand=>${brand}`
    
  
    }

    @Get('filter')
    getProductFilter() {
        return `i am a filter`;
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getProduct(@Param('id') id:string) {
      return this.productsService.findOne(+id);
   
    }

    @Post()
    create(@Body() payload:any){
       // return {
         //  message: 'Product created',
          // payload,
        //};
        return this.productsService.create(payload);

    }

    @Put(':id')
    update(@Param('id') id:number, @Body() payload:any){
      //  return { 
      //      message: `Product #${id} updated`,
       //     payload,
      //  };
    
    return this.productsService.update(id, payload);
    
    }   
    @Delete(':id')
    delete(@Param('id') id:number){ 
        return {
            message: `Product #${id} deleted`,
        };
    }   


}
