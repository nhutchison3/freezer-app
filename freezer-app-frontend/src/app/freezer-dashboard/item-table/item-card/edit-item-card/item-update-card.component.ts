import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { EventService } from "../../event.service";
import { ItemModel } from "../../../../models/item-model";
import { FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../../../../services/item.service";
import { CategoryModel } from "../../../../models/category-model";
import { ActivatedRoute } from "@angular/router";
import { UpdateItemModel } from "../../../../models/update-item-model";

@Component({
  selector: 'app-edit-item-card',
  templateUrl: './item-update-card.component.html',
  styleUrls: ['./item-update-card.component.scss'],
})
export class ItemUpdateCard implements OnInit {
  @Output() notifyParent = new EventEmitter<void>();
  @Input() item!: ItemModel;

  private itemFormGroup!: FormGroup;

  categories: CategoryModel[] = [];

  nameControl = new FormControl('');
  quantityControl = new FormControl('');
  dateControl = new FormControl('');
  categoryControl = new FormControl(null);

  constructor(private itemService: ItemService,
              private itemEventService: EventService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.nameControl = new FormControl(this.item.name);
    this.quantityControl = new FormControl(this.item.quantity);
    this.dateControl = new FormControl(this.item.date);
    this.categoryControl = new FormControl(this.item.itemCategory?.name);
    this.itemFormGroup = new FormGroup({
      name: this.nameControl,
      quantity: this.quantityControl,
      date: this.dateControl,
      categoryName: this.categoryControl
    });
    this.activatedRoute.data.subscribe(({categories}) => {
      this.categories = categories;
    })
  }

  updateItem() {
    const updateModel = new UpdateItemModel(this.itemFormGroup.value);
    if (this.itemFormGroup.value.date !== this.item.date) {
      updateModel.date = this.itemFormGroup.value.date;
    }
    this.itemService.update(updateModel, this.item.id).subscribe(value => {
      this.notifyParent.emit();
      this.itemEventService.emitUpdateEvent(updateModel);
    });
  }
}
