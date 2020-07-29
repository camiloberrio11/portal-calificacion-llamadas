import { CalificacionLlamadaService } from './calificacion-llamada/calificacion-llamada.service';
import { Dbfake } from './calificacion-llamada/simulatedata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalificacionLlamadaComponent } from './calificacion-llamada/calificacion-llamada.component';
import { NgxLoadingModule } from 'ngx-loading';
import { RatingModule } from 'ng-starrating';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CalificacionLlamadaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxLoadingModule.forRoot({}),
    RatingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [Dbfake, CalificacionLlamadaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
