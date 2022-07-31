import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ItemModel } from '../models/item-model';
import { HttpClientBase } from './http-client-base.service';

@Injectable({
  providedIn: 'root',
})
export class ItemService extends HttpClientBase {
  freezerItemUrl = `${this.baseUrl}/freezer-item`;

  constructor(private httpService: HttpClient) {
    super();
  }

  getAll(): Observable<ItemModel[]> {
    return this.httpService.get<ItemModel[]>(this.freezerItemUrl);
  }

  create(item: ItemModel): Observable<any> {
    return this.httpService.post<any>(this.freezerItemUrl, item);
  }

  update(item: ItemModel, id: number): Observable<any> {
    return this.httpService.put<any>(`${this.freezerItemUrl}/${id}`, item);
  }

  deleteMany(ids: number[]) {
    return this.httpService.post(`${this.freezerItemUrl}/delete`, { ids: ids });
  }

  delete(id: number) {
    return this.httpService.delete(`${this.freezerItemUrl}/${id}`);
  }
}
