import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RecetasModule } from './receta/receta.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecetasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
