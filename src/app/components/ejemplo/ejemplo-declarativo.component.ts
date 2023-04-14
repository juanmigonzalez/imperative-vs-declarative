import { Component } from '@angular/core';
import { Observable, interval, map, switchMap } from 'rxjs';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-ejemplo-declarativo',
  template: `
    <div>
      <h1>Declarativo</h1>
      <p>{{ phrase$ | async }}</p>
    </div>
  `,
})
export class Ejemplo1DeclarativoComponent {
  phrase$: Observable<string>;

  constructor(private phraseService: PhraseService) {
    this.phrase$ = interval(5000).pipe(
      switchMap(() => this.phraseService.getRandomPhrase()),
      map((phrase) => phrase.fact)
    );
  }
}

/**
 * - Código más conciso
 * - Sin hooks de ciclo de vida
 * - Gestión automática de las suscripciones con async
 */
