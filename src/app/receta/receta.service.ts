import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { receta } from './Receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private apiUrl: string = environment.baseUrl + 'recetas';
  getRecetas: any;

constructor(private http:HttpClient) { }
getBooks(): Observable<receta[]> {
  return this.http.get<receta[]>(this.apiUrl);
}

}
