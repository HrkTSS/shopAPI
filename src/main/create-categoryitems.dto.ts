import { IsNotEmpty } from "class-validator";

export class CreateCategoryItemsDto{
    @IsNotEmpty()
    item_id:number

    @IsNotEmpty()
    category_id:number
}