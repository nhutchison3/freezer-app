import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreezerDashboardComponent } from './freezer-dashboard/freezer-dashboard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { AddItemComponentComponent } from './freezer-dashboard/add-item-component/add-item-component.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DeleteButtonComponent } from './freezer-dashboard/delete-button/delete-button.component';
import { ItemTableModule } from './freezer-dashboard/item-table.module';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryCardComponent } from './category-management/category-card/category-card.component';
import { MatIconModule } from "@angular/material/icon";
import { AddCategoryComponent } from './category-management/add-category/add-category.component';
import { CategoryTableComponent } from './category-management/category-table/category-table.component';
import { EditCategoryComponent } from './category-management/category-card/edit-category/edit-category.component';

@NgModule({
  declarations: [
    AppComponent,
    FreezerDashboardComponent,
    AddItemComponentComponent,
    DeleteButtonComponent,
    CategoryManagementComponent,
    CategoryCardComponent,
    AddCategoryComponent,
    CategoryTableComponent,
    EditCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    ItemTableModule,
    MatIconModule,
  ],
  providers: [HttpClient, ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
