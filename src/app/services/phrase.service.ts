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

  /**
   * TODO: Convierte una promesa en un observable con Rxjs
   * REPO:
   * - git clone https://github.com/juanmigonzalez/imperative-vs-declarative
   * - cd imperative-vs-declarative
   * - npm i
   * - ng serve
   * HELP: https://rxmarbles.com/ y https://www.learnrxjs.io/learn-rxjs/operators
   * @returns Observable<Phrase>
   */
  async getRandomPhraseFetch(): Promise<Response> {
    const response = await fetch(this.apiUrl);
    return response.json();
  }
}
