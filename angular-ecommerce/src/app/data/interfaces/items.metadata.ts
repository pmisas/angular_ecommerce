export interface IItems{
    id:number;
    price: number;
    stock: number;
    seller_id:number;
    description:string;
    image:string;
    name:string;
}

export interface ICategories{
    id:number;
    name: string;
    items:IItems;
}

export interface ICategoriesList{
    home:ICategories;
    electronic:ICategories;
    beauty:ICategories;
    health:ICategories;
    kids:ICategories;
    transport:ICategories;
    entertainment:ICategories
}
