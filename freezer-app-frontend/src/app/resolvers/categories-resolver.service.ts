import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryModel } from "../models/category-model";
import { CategoryService } from "../services/category.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesResolver implements Resolve<Observable<CategoryModel[]>> {

  constructor(private categoryService: CategoryService) {
  }

  resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CategoryModel[]> => this.categoryService.getAll();
}
