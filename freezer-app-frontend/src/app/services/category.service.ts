import { Injectable } from '@angular/core';
import { HttpClientBase } from './http-client-base.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category-model';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item-model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends HttpClientBase {
  freezerCategoryUrl = `${this.baseUrl}/freezer-item-category`;

  constructor(private httpService: HttpClient) {
    super();
  }

  getAll(): Observable<CategoryModel[]> {
    return this.httpService.get<CategoryModel[]>(this.freezerCategoryUrl);
  }

  getItemsByCategory(category: string): Observable<ItemModel[]> {
    return this.httpService.post<ItemModel[]>(
      `${this.freezerCategoryUrl}/get-items`,
      {
        categoryName: category,
      }
    );
  }

  create(itemCategory: CategoryModel): Observable<any> {
    return this.httpService.post<any>(this.freezerCategoryUrl, itemCategory);
  }

  update(itemCategory: CategoryModel, id: number): Observable<any> {
    return this.httpService.put(
      `${this.freezerCategoryUrl}/${id}`,
      itemCategory
    );
  }

  delete(id: number): Observable<any> {
    return this.httpService.delete(`${this.freezerCategoryUrl}/${id}`);
  }
}
