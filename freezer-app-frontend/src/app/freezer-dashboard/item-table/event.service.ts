import { Injectable } from '@angular/core';
import { ItemModel } from '../../models/item-model';
import { Subject } from 'rxjs';
import { ItemEventModel } from "./item-event-model";
import { CategoryModel } from "../../models/category-model";

@Injectable({
  providedIn: 'root',
})
export class EventService {
  itemEventEmitter = new Subject<ItemEventModel | void>();
  categoryEmitter = new Subject<CategoryModel | void>();

  constructor() {}

  getItemEventEmitter() {
    return this.itemEventEmitter.asObservable();
  }

  getCategoryEventEmitter() {
    return this.categoryEmitter.asObservable();
  }

  emitUpdateEvent(item: ItemModel) {
    const itemEvent = new ItemEventModel(item, "update");
    this.itemEventEmitter.next(itemEvent);
  }

  emitDeleteEvent(item: ItemModel) {
    const itemEvent = new ItemEventModel(item, "delete");
    this.itemEventEmitter.next(itemEvent);
  }

  emitDeleteCategoryEvent(category?: CategoryModel) {
    this.categoryEmitter.next(category);
  }

  emitUpdateCategoryEvent(category?: CategoryModel) {
    this.categoryEmitter.next(category);
  }
}
