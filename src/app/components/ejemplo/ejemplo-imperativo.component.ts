import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { PhraseService } from 'src/app/services/phrase.service';

@Component({
  selector: 'app-ejemplo-imperativo',
  template: `
    <div>
      <h1>Imperativo</h1>
      <p>{{ phrase }}</p>
    </div>
  `,
})
export class Ejemplo1ImperativoComponent {
  phrase!: string;

  private phraseSubscription!: Subscription;
  private serviceSubscription!: Subscription;

  constructor(private phraseService: PhraseService) {}

  async ngOnInit() {
    this.phraseSubscription = interval(5000).subscribe(() => {
      this.serviceSubscription = this.phraseService
        .getRandomPhrase()
        .subscribe((phrase) => {
          this.phrase = phrase.fact;
        });
    });
  }

  ngOnDestroy() {
    this.phraseSubscription.unsubscribe();
    this.serviceSubscription.unsubscribe();
  }
}

/**
 * - Bastante código y anidado
 * - Gestión manual de las suscripciones
 */
