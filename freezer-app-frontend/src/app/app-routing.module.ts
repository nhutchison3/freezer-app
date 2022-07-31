import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreezerDashboardComponent } from "./freezer-dashboard/freezer-dashboard.component";
import { CategoryManagementComponent } from "./category-management/category-management.component";
import { CategoriesResolver } from "./resolvers/categories-resolver.service";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'item-dashboard',
    pathMatch: 'full'
  },
  {
    component: FreezerDashboardComponent,
    path: 'item-dashboard',
    resolve: {
      categories: CategoriesResolver
    }
  },
  {
    component: CategoryManagementComponent,
    path: 'category-dashboard'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
