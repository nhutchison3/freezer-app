import { Component, Input, OnInit } from "@angular/core";
import { CategoryModel } from "../../models/category-model";
import { CategoryService } from "../../services/category.service";
import { EventService } from "../../freezer-dashboard/item-table/event.service";

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category!: CategoryModel;
  private isEditMode = false;
  constructor(private categoryService: CategoryService,
              private eventService: EventService) { }

  ngOnInit(): void {
  }

  editItem() {
    this.toggleEditMode();
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }


  getIsEditMode() {
    return this.isEditMode;
  }

  deleteItem($event: MouseEvent) {
    $event.stopPropagation();
    this.categoryService.delete(this.category.id).subscribe(() => {
      this.eventService.emitDeleteCategoryEvent();
    });
  }
}
