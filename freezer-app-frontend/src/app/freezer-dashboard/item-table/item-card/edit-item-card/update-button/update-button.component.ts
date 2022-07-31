import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.scss']
})
export class UpdateButtonComponent implements OnInit {
  @Output() updateEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  updateItem() {
    this.updateEmitter.emit();
  }
}
