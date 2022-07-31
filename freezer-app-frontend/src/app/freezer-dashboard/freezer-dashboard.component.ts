import { Component, OnInit, ViewChild } from "@angular/core";
import { ItemTableComponent } from "./item-table/item-table.component";

@Component({
  selector: 'app-freezer-dashboard',
  templateUrl: './freezer-dashboard.component.html',
  styleUrls: ['./freezer-dashboard.component.scss']
})
export class FreezerDashboardComponent implements OnInit {

  @ViewChild('itemTable') itemTable!: ItemTableComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  refreshTable(category?: string) {
    this.itemTable.refreshTable(category);
  }

  deleteItems() {
    this.itemTable.deleteSelectedItems();
  }
}
