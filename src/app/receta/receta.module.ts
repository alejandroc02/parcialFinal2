import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './receta.component';
import {RecetaListComponent} from './receta-list/receta-list.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[RecetaListComponent],
  declarations: [RecetaListComponent]
})
export class RecetasModule { }
