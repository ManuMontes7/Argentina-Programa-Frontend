import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aptitudes } from '../model/aptitudes';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
  skillURL = 'https://portfolio-yoprogramo.herokuapp.com/aptitudes/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Aptitudes[]> {
    return this.httpClient.get<Aptitudes[]>(this.skillURL + 'lista');
  }

  public detail(id: number): Observable<Aptitudes> {
    return this.httpClient.get<Aptitudes>(this.skillURL + `detail/${id}`);
  }

  public save(aptitudes: Aptitudes): Observable<any> {
    return this.httpClient.post<any>(this.skillURL + 'create', aptitudes);
  }

  public update(id: number, aptitudes: Aptitudes): Observable<any> {
    return this.httpClient.put<any>(this.skillURL + `update/${id}`, aptitudes);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.skillURL + `delete/${id}`);
  }
}
