import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Output() deleteItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItems() {
    this.deleteItem.emit();
  }
}
