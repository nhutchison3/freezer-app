import { CategoryModel } from "./category-model";

export class ItemModel {

  public constructor(init?: Partial<ItemModel>) {
    if (init && !init?.date) {
      init.date = this.getDate();
    }
    Object.assign(this, init);
  }

  name!: string;
  quantity!: number;
  date!: string;
  id!: number;
  itemCategory?: CategoryModel;

  getDate() {
    let dateObj = new Date();
    let year = dateObj.getUTCFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();
    return `${year}-${month}-${date}`;
  }
}
