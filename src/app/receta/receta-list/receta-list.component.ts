import { Component, OnInit } from '@angular/core';
import { receta } from '../Receta';
import {RecetaService} from '../receta.service'
@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas:Array<receta>=[];
  constructor(private recetaService: RecetaService) { }


  getRecetas(): void {
    this.recetaService.getRecetas.subscribe((books) => {
      this.recetas = books;
    });
  }

  ngOnInit() {
  }

}

