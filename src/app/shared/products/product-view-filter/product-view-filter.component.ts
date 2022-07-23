import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view-filter',
  templateUrl: './product-view-filter.component.html',
  styleUrls: ['./product-view-filter.component.scss'],
})
export class ProductViewFilterComponent implements OnInit, OnDestroy {
  @Input() public categories: ICategory[] = [];

  @Output() public filterProducts = new EventEmitter<IProduct[]>();

  public productLists: IProduct[] = [];

  public searchInput: string = '';

  public filteredProducts: IProduct[] = [];

  public selectedCategory: number = -1;

  public productSubscription!: Subscription;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  public getAllProducts() {
    this.productSubscription = this.productService
      .getAllProducts()
      .subscribe((products) => {
        this.productLists = products;
        this.filterProducts.emit(this.productLists);
      });
  }

  public categoryChanged(selectedCategory: string) {
    if (+selectedCategory === -1) {
      this.filterProducts.emit(this.productLists);
    } else {
      this.filteredProducts = this.productLists.filter((product) => {
        return product.categoryId === +selectedCategory;
      });
      this.filterProducts.emit(this.filteredProducts);
    }
  }

  public searchChanged(searchInput: string) {
    console.log('searchInput', searchInput);
    const searchProducts =
      this.selectedCategory === -1 ? this.productLists : this.filteredProducts;

    if (searchInput.length > 1) {
      const searchFilteredProducts = searchProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          product.name.toLowerCase().startsWith(searchInput.toLowerCase()) ||
          product.name.toLowerCase().endsWith(searchInput.toLowerCase())
      );
      this.filterProducts.emit(searchFilteredProducts);
    }
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }
}
