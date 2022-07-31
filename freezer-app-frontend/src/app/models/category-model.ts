export class CategoryModel {
  public constructor(init?: Partial<CategoryModel>) {
    Object.assign(this, init);
  }

  name!: string;
  id!: number;
}
