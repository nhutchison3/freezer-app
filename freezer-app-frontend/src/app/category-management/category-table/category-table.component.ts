import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../services/category.service";
import { CategoryModel } from "../../models/category-model";
import { EventService } from "../../freezer-dashboard/item-table/event.service";

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {
  categories: CategoryModel[] = [];

  constructor(private itemCategoryService: CategoryService,
              private eventService: EventService
  ) { }
  ngOnInit(): void {
    this.refreshCategories();
    this.eventService.getCategoryEventEmitter().subscribe(() =>{
      this.refreshCategories();
    });
  }

  refreshCategories() {
    this.itemCategoryService.getAll().subscribe((cats) => {
      this.categories = cats;
    });
  }
}
