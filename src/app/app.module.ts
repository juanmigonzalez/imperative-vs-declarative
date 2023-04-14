import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo1DeclarativoComponent } from './components/ejemplo/ejemplo-declarativo.component';
import { Ejemplo1DeclarativoV2Component } from './components/ejemplo/ejemplo-declarativo-v2.component';
import { Ejemplo1ImperativoComponent } from './components/ejemplo/ejemplo-imperativo.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo1DeclarativoComponent,
    Ejemplo1DeclarativoV2Component,
    Ejemplo1ImperativoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
