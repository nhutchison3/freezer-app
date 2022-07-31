import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { CategoriesResolver } from "../../resolvers/categories-resolver.service";
import { ActivatedRoute } from "@angular/router";
import { CategoryModel } from "../../models/category-model";
import { CategorySelectionService } from "../../services/category-selection.service";

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.scss']
})
export class CategorySelectorComponent implements OnInit {
  @Output() notifyParentOfCategorySelection = new EventEmitter<void>();
  public categories: CategoryModel[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private categorySelectionService: CategorySelectionService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({categories}) => {
      this.categories = categories;
    });
  }

  handleSelection(name?: string) {
    this.categorySelectionService.setSelection(name);
  }
}
