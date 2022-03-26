import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnagramService {

  anagramSubject: Subject<string[]> = new Subject<string[]>();

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private baseUrl: string) { }

  getAllByWord(word: string): void {
    this.http.post<string[]>(`${this.baseUrl}anagram`, {
      params: {
        word: word
      }
    }).subscribe(anagrams => {
      this.anagramSubject.next(anagrams)
    });
  }
}
