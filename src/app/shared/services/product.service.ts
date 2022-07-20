import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category.model';
import { IProduct } from 'src/app/models/product.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = environment.API_URL;
  private loader = new BehaviorSubject<boolean>(false);
  loader$ = this.loader.asObservable();

  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/product/all`);
  }

  public getAllCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.baseUrl}/category/all`);
  }

  public toggleLoader(value: boolean): void {
    return this.loader.next(value);
  }
}
