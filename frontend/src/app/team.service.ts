import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private baseUrl = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) {
  }

  getTeamById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getTeamsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createTeam(team: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, team);
  }

  updateTeam(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
