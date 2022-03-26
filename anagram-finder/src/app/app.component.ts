import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'anagram-finder';

  searchForm = this.formBuilder.group({
    word: ''
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    // TODO: add submit logic
    this.searchForm.reset();
  }
}
