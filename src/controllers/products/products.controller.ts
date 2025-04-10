import { Controller, Get, Query, Param, Post,Body} from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('')
    getProducts(
        @Query('limit') limit = 100,
        @Query('offset') offset =0,
        @Query('brand') brand:string
    ){
        return {
            message: `Products limit=> ${limit} offset=>${offset} brand=>${brand}`
        }; 
    }

    @Get('filter')
    getProductFilter() {
        return `Yo soy un filter`;
    }

    @Get(':id')
    getProduct(@Param('id') id:string) {
        return `Products ${id}`;
    }
    @Post()
    create(@Body() payload:any){
        return {
           message: 'Product created',
           payload,
        };
    }

}
