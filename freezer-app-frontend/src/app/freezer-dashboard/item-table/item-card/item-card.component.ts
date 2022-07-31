import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '../../../models/item-model';
import { EventService } from '../event.service';
import { ItemService } from '../../../services/item.service';
import { CategorySelectionService } from '../../../services/category-selection.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() itemModel!: ItemModel;
  isEditMode = false;

  constructor(
    private itemService: ItemService,
    private itemEventService: EventService,
    private categorySelectionService: CategorySelectionService
  ) {}

  ngOnInit(): void {}

  editItem() {
    this.toggleEditMode();
  }

  getIsEditMode() {
    return this.isEditMode;
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  deleteItem($event: MouseEvent) {
    $event.stopPropagation();
    this.itemService.delete(this.itemModel.id).subscribe((val) => {
      this.itemEventService.emitDeleteEvent(this.itemModel);
    });
  }

  getCategory() {
    return this.categorySelectionService.getSelection()
      ? this.categorySelectionService.getSelection()
      : this.itemModel.itemCategory?.name;
  }

  hasCategory() {
    return this.categorySelectionService.getSelection() || this.itemModel.itemCategory;
  }
}
