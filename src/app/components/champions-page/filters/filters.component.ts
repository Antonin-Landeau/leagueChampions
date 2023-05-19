import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent {
  @Output() setInputField: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(e: Event): void {
    const inputValue = (e.target as HTMLInputElement).value;
    this.setInputField.emit(inputValue);
  }
}
