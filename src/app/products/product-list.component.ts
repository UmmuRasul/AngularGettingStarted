import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle:string = 'Product List';
    imagewidth: number = 50;
    imageMargin :number = 2;
    showImage: boolean =false;

    _listFilter: string;
    get lisFilter():string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this.listFilter = value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter): this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
        {
            "productId": 2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releasDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"assets/images/garden_cart.png"

        },
        {
            "productId": 2,
            "productName":"Garden Cart",
            "productCode":"GDN-0023",
            "releasDate":"March 18, 2019",
            "description":"15 gallon capacity rolling garden",
            "price":32.99,
            "starRating":4.2,
            "imageUrl":"assets/images/garden_cart.png"

        }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1); 
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('In OnInit');
    }

}