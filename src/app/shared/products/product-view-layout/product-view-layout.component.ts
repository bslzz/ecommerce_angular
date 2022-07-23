import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-view-layout',
  templateUrl: './product-view-layout.component.html',
  styleUrls: ['./product-view-layout.component.scss'],
})
export class ProductViewLayoutComponent implements OnInit {
  categories$!: Observable<ICategory[]>;

  public products: IProduct[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  public getAllCategories() {
    this.categories$ = this.categoryService.getAllCategories();
  }

  public filterProducts(products: IProduct[]) {
    this.products = products;
  }
}
