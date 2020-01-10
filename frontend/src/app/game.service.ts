import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/';
  private baseUrlGames = 'http://localhost:8080/games';
  private baseUrlGoals = 'http://localhost:8080/goals';

  constructor(private http: HttpClient) {
  }

  getGamesList(): Observable<any> {
    return this.http.get(`${this.baseUrlGames}`);
  }

  getGameById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/${id}`);
  }

  getGameStatusByTeam(id: number, status: string): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/${status}/${id}`);
  }

  getPointsByTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/points/${id}`);
  }

  getGoalsForTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/for/${id}`);
  }

  getGoalsAgainstTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/against/${id}`);
  }

  getGamesPlayedByTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/${id}`)
  }


}
