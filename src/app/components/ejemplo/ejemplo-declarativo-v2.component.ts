import { Component, inject } from '@angular/core';
import { interval, map, switchMap } from 'rxjs';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-ejemplo-declarativo-v2',
  template: `
    <div>
      <h1>Declarativo V2</h1>
      <p>{{ phrase$ | async }}</p>
    </div>
  `,
})
export class Ejemplo1DeclarativoV2Component {
  phraseService = inject(PhraseService);

  phrase$ = interval(5000).pipe(
    switchMap(() => this.phraseService.getRandomPhrase()),
    map((phrase) => phrase.fact)
  );
}

/**
 * - Código conciso next level
 * - Sin constructores ni hooks de ciclo de vida
 * - Gestión automática de las suscripciones con async
 */
