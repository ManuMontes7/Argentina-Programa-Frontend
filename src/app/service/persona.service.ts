import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  perURL = 'https://portfolio-yoprogramo.herokuapp.com/personas/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<persona[]> {
    return this.httpClient.get<persona[]>(this.perURL + 'lista');
  }

  public detail(id: number): Observable<persona> {
    return this.httpClient.get<persona>(this.perURL + `detail/${id}`);
  }

  /*public save(Persona: persona): Observable<any> {
    return this.httpClient.post<any>(this.perURL + 'create', educacion);
  }*/

  public update(id: number, Persona: persona): Observable<any> {
    return this.httpClient.put<any>(this.perURL + `update/${id}`, Persona);
  }

  /*public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.perURL + `delete/${id}`);
  }*/
}
