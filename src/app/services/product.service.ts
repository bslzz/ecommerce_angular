import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getAllProducts(): Observable<IProduct[]> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.product}/all`;
    return this.getArray<IProduct>(url);
  }

  public getProduct(id: number): Observable<IProduct> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.product}/${id}`;
    return this.get<IProduct>(url);
  }

  public addProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.product}`;
    return this.httpClient.post<IProduct>(url, product);
  }
  public updateProduct(product: IProduct): Observable<IProduct> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.product}`;
    return this.httpClient.put<IProduct>(url, product);
  }
  public deleteProduct(id: number): Observable<IProduct> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.product}${id}`;
    return this.httpClient.delete<IProduct>(url);
  }

  // generic methods for get and get array
  private extractData<T>(res: any): T {
    if (res && (res.status < 200 || res.status >= 300)) {
      throw new Error('Bad response status' + res.status);
    }
    return res || {};
  }

  private get<T>(url: string, options?: any): Observable<T> {
    return this.httpClient
      .get<T>(url, options)
      .pipe(map((res) => this.extractData<T>(res)));
  }

  private getArray<T>(url: string, options?: any): Observable<T[]> {
    return this.httpClient
      .get<T[]>(url, options)
      .pipe(map((res) => this.extractData<T[]>(res)));
  }
}
