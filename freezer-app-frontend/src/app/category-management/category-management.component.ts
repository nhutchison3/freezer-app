import { Component, OnInit, ViewChild } from "@angular/core";
import { CategoryService } from "../services/category.service";
import { CategoryModel } from "../models/category-model";
import { CategoryTableComponent } from "./category-table/category-table.component";

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {
  @ViewChild('categoryTable') categoryTable!: CategoryTableComponent;

  constructor() { }

  ngOnInit(): void {
  }

  refreshTable() {
    this.categoryTable.refreshCategories();
  }

}
