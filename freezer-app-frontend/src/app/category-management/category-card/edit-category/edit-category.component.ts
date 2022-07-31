import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CategoryModel } from "../../../models/category-model";
import { FormControl, FormGroup } from "@angular/forms";
import { CategoryService } from "../../../services/category.service";
import { EventService } from "../../../freezer-dashboard/item-table/event.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Output() notifyParent = new EventEmitter<void>();
  @Input() category!: CategoryModel;
  private categoryFormGroup!: FormGroup;
  nameControl = new FormControl('');

  constructor(private categoryService: CategoryService,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.nameControl = new FormControl(this.category.name);
    this.categoryFormGroup = new FormGroup({
      name: this.nameControl,
    });
  }

  public updateCategory() {
    const updateModel = new CategoryModel(this.categoryFormGroup.value);
    this.categoryService.update(updateModel, this.category.id).subscribe(() => {
      this.notifyParent.emit();
      this.eventService.emitUpdateCategoryEvent();
    });
  }
}
