export class categoriesDto {
    readonly id: number;
    readonly name: string;
    readonly  description: string;
 }
 export class UpdateCategoriesDto {
    readonly name?: string;
    readonly description?: string;
    readonly image?: string;
    readonly id?: number;
 }