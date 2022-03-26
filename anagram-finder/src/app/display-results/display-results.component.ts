import {Component} from '@angular/core';
import {AnagramService} from '../services/anagram.service';

@Component({
  selector: 'display-results',
  templateUrl: './display-results.component.html'
})
export class DisplayResultsComponent {

  constructor(public anagramService: AnagramService) {
  }
}

