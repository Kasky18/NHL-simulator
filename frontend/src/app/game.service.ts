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

  /**
   * vrati pocet vyhier, prehier, atd. pre domaci,hostujuci tim + celkovo
   * */
  getGameStatusByHomeTeam(id: number, status: string): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/home/${status}/${id}`);
  }

  getGameStatusByAwayTeam(id: number, status: string): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/away/${status}/${id}`);
  }

  getGameStatusByTeam(id: number, status: string): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/${status}/${id}`);
  }


  /**
   * vrati zoznam domacich a hostujucich zapasov timu
   * */
  getGamesPlayedByHomeTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/home/${id}`);
  }

  getGamesPlayedByAwayTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/away/${id}`);
  }

  /**
   * vrati pocet zapasov doma, vonku + celkovo pre tim
   * */
  getNumberOfGamesPlayedByHomeTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/home/count/${id}`)
  }

  getNumberOfGamesPlayedByAwayTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/away/count/${id}`)
  }

  getNumberOfGamesPlayedByTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGames}/all/count/${id}`)
  }

  /**
   * vrati pocet vstrelenych golov v domacich, hostujucih zapasov + celkovo pre tim
   * */
  getGoalsForHomeTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/home/for/${id}`)
  }

  getGoalsForAwayTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/away/for/${id}`)
  }

  getGoalsForTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/for/${id}`);
  }

  /**
   * vrati pocet inkasovanych golov v domacich, hostujucih zapasov + celkovo pre tim
   * */
  getHomeGoalsAgainstTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/home/against/${id}`)
  }

  getAwayGoalsAgainstTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/away/against/${id}`)
  }

  getGoalsAgainstTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlGoals}/against/${id}`);
  }

  getPointsByHomeTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/points/home/${id}`);
  }

  getPointsByAwayTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/points/away/${id}`);
  }

  getPointsByTeam(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/points/${id}`);
  }


}
