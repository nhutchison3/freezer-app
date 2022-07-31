import { NgModule } from '@angular/core';
import { ItemCardComponent } from "./item-table/item-card/item-card.component";
import { ItemTableComponent } from "./item-table/item-table.component";
import { EventService } from "./item-table/event.service";
import { ItemUpdateCard } from "./item-table/item-card/edit-item-card/item-update-card.component";
import { UpdateButtonComponent } from "./item-table/item-card/edit-item-card/update-button/update-button.component";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { ItemEventModel } from "./item-table/item-event-model";
import { MatSelectModule } from "@angular/material/select";
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { MatButtonToggleModule } from "@angular/material/button-toggle";



@NgModule({
  declarations: [
    ItemTableComponent,
    ItemCardComponent,
    ItemUpdateCard,
    UpdateButtonComponent,
    CategorySelectorComponent,
  ],
  exports: [
    ItemTableComponent,
    UpdateButtonComponent,
    CategorySelectorComponent,
  ],
  imports: [
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
  ],
  providers: [EventService],
})
export class ItemTableModule {}
