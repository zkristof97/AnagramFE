import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AnagramService} from "./services/anagram.service";

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

  constructor(private formBuilder: FormBuilder,
              private anagramService: AnagramService) { }

  onSubmit(): void {
    this.anagramService.getAllByWord(this.searchForm.get('word')?.value);
    this.searchForm.reset();
  }
}
