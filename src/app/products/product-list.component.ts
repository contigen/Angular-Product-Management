import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  errorMessage: any;
  constructor(private productService: ProductService) {}
  pageTitle: string = `Products List`;
  showImage: boolean = false;
  private _listFilter = ``;
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterString: string): IProduct[] {
    return this.products.filter((product: IProduct) => {
      product.productName.toLocaleLowerCase().includes(filterString);
    });
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
