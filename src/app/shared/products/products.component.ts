import { Component, Input, OnInit } from '@angular/core';
import { firstValueFrom, Observable, tap } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IProduct, IProductImage } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() public products: IProduct[] = [];
  @Input() public categories: ICategory[] = [];

  public categoriesList: ICategory[] = [];

  constructor() {}

  ngOnInit(): void {}

  public getCategoryName(categoryId: number) {
    const category = this.categories.find(
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
