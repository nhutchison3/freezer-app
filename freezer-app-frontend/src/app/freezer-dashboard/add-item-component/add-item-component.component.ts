import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { ItemModel } from "../../models/item-model";


@Component({
  selector: 'app-add-item-component',
  templateUrl: './add-item-component.component.html',
  styleUrls: ['./add-item-component.component.scss']
})
export class AddItemComponentComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<Event>();
  isCreating!: boolean;
  itemFormGroup!: FormGroup;
  nameControl = new FormControl('');
  quantityControl = new FormControl('');
  dateControl = new FormControl('');

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemFormGroup = new FormGroup({
      name: this.nameControl,
      quantity: this.quantityControl,
      date: this.dateControl
    });
    this.isCreating = false;
  }

  openCreate() {
    this.isCreating = true;
  }

  toggleCreate() {
    this.isCreating = !this.isCreating;
  }

  async addItem() {
    let itemModel = new ItemModel(this.itemFormGroup.value);

    try {
      this.itemService.create(itemModel).subscribe(res => {
        this.itemCreated.emit();
        this.toggleCreate();
        this.itemFormGroup.reset();
      });
    } catch (e) {
      console.error(e);
    }
  }
}
