import { Dbfake } from './calificacion-llamada/simulatedata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionLlamadaComponent } from './calificacion-llamada/calificacion-llamada.component';
import { NgxLoadingModule } from 'ngx-loading';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    CalificacionLlamadaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    RatingModule
  ],
  providers: [Dbfake],
  bootstrap: [AppComponent]
})
export class AppModule { }
