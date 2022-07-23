import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public products$!: Observable<IProduct[]>;
  public categories$!: Observable<ICategory[]>;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  public getAllProducts(): void {
    this.products$ = this.productService.getAllProducts();
  }

  public async getAllCategories(): Promise<void> {
    this.categories$ = this.categoryService.getAllCategories();
    // this.categoriesList = await firstValueFrom(this.categories$);
  }
}
