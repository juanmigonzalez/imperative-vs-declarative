import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Phrase {
  image: string;
  fact: string;
}

@Injectable({
  providedIn: 'root',
})
export class PhraseService {
  private apiUrl = 'https://some-random-api.ml/animal/cat';

  constructor(private http: HttpClient) {}

  getRandomPhrase(): Observable<Phrase> {
    return this.http.get<Phrase>(this.apiUrl);
  }

  async getRandomPhraseFetch(): Promise<Response> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}
