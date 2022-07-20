import { Component, OnInit } from '@angular/core';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IProduct, IProductImage } from 'src/app/models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products$!: Observable<IProduct[]>;
  public categories$!: Observable<ICategory[]>;
  public categoriesList: ICategory[] = [];
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  public getAllProducts(): void {
    this.products$ = this.productService
      .getAllProducts()
      .pipe(tap((products: IProduct[]) => (this.products = products)));
  }

  public async getAllCategories(): Promise<void> {
    this.categories$ = this.productService.getAllCategories();
    this.categoriesList = await firstValueFrom(this.categories$);
  }

  public getCategoryName(categoryId: number) {
    const category = this.categoriesList.find(
      (category) => category.id === categoryId
    );
    return category?.name || '';
  }

  public shortenName(name: string): string {
    return `${name.substring(0, 50)}...`;
  }

  public getProductImage(image: IProductImage): string {
    if (image) {
      return `data:${image.mime};base64,${image.base64Image}`;
    } else {
      return 'https://via.placeholder.com/250';
    }
  }
}
