import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CategoryModel } from "../../models/category-model";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @Output() categoryCreated = new EventEmitter<Event>();
  isCreating!: boolean;
  categoryFormGroup!: FormGroup;
  nameControl = new FormControl('');

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryFormGroup = new FormGroup({
      name: this.nameControl,
    });
    this.isCreating = false;
  }

  openCreate() {
    this.isCreating = true;
  }

  toggleCreate() {
    this.isCreating = !this.isCreating;
  }

  async addCategory() {
    let categoryModel = new CategoryModel(this.categoryFormGroup.value);

    try {
      this.categoryService.create(categoryModel).subscribe(() => {
        this.categoryCreated.emit();
        this.toggleCreate();
        this.categoryFormGroup.reset();
      });
    } catch (e) {
      console.error(e);
    }
  }
}
