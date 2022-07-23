import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public getAllCategories(): Observable<ICategory[]> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.category}/all`;
    return this.getArray<ICategory>(url);
  }
  public getCategory(id: number): Observable<ICategory> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.category}/${id}`;
    return this.get<ICategory>(url);
  }

  public addCategory(category: ICategory): Observable<ICategory> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.category}`;
    return this.httpClient.post<ICategory>(url, category);
  }
  public updateCategory(category: ICategory): Observable<ICategory> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.category}`;
    return this.httpClient.put<ICategory>(url, category);
  }
  public deleteCategory(id: number): Observable<ICategory> {
    const url = `${this.baseUrl}/${environment.apiEndPoints.category}${id}`;
    return this.httpClient.delete<ICategory>(url);
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
