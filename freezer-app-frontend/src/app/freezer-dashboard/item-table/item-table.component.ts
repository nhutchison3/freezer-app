import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item-model';
import { SelectionModel } from '@angular/cdk/collections';
import { ItemService } from '../../services/item.service';
import { EventService } from './event.service';
import { CategorySelectionService } from "../../services/category-selection.service";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.scss'],
})
export class ItemTableComponent implements OnInit {
  items: ItemModel[] = [];
  displayedColumns!: string[];
  selection: SelectionModel<ItemModel>;
  itemsToDeleteById: number[] = [];
  categorySelection: string | undefined = undefined;

  constructor(
    private itemService: ItemService,
    private itemEventService: EventService,
    private categorySelectionService: CategorySelectionService,
    private categoryService: CategoryService
  ) {
    const allowMultiSelect = true;
    const initialSelection: ItemModel[] = [];
    this.selection = new SelectionModel<ItemModel>(
      allowMultiSelect,
      initialSelection
    );
    this.displayedColumns = ['name', 'quantity', 'date', 'select'];
    this.categorySelection = this.categorySelectionService.getSelection();
  }

  ngOnInit(): void {
    this.refreshTable();
    this.selection.changed.subscribe((value) => {
      this.itemsToDeleteById = value.source.selected.map((val) => val.id);
    });
    this.itemEventService.getItemEventEmitter().subscribe((val) => {
      this.handleItemEvent();
    });
    this.categorySelectionService.categoryChangeEvent.subscribe(catName => {
      this.categorySelection = catName;
      this.refreshTable(catName);
    })
  }

  refreshTable(category?: string | undefined) {
    if (category) {
      this.categoryService.getItemsByCategory(category).subscribe(items => {
        this.items = items;
      });
    } else {
      this.itemService.getAll().subscribe((items) => {
        this.items = items;
      });
    }
    this.items.sort((a, b) => a.date.localeCompare(b.date));
  }

  deleteSelectedItems() {
    this.itemService.deleteMany(this.itemsToDeleteById).subscribe(() => {
      this.refreshTable();
    });
  }

  handleItemEvent() {
    this.refreshTable();
  }
}
