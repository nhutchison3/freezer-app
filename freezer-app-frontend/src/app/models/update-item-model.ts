import { ItemModel } from "./item-model";

export class UpdateItemModel extends ItemModel {

  constructor(init: Partial<UpdateItemModel>) {
      super(init);
      this.categoryName = init.categoryName;
  }

  categoryName: string | null | undefined = null;
}
