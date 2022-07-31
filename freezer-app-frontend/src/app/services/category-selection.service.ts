import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategorySelectionService {
  categorySelection: string | undefined;
  categoryChangeEvent = new EventEmitter<string>();
  constructor() {
    this.categorySelection = undefined;
  }

  getSelection() {
    return this.categorySelection;
  }

  setSelection(category?: string) {
    this.categorySelection = category;
    this.categoryChangeEvent.emit(category);
  }
}
