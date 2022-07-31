import { ItemModel } from "../../models/item-model";

export class ItemEventModel {
  constructor(item: ItemModel, eventType: string) {
    this.item = item;
    this.eventType = eventType;
  }
  item: ItemModel;
  eventType: string;
}
