import {Component, OnInit} from '@angular/core';
import {forkJoin, from, Observable} from "rxjs";
import {Team} from "../team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";
import {GameService} from "../game.service";
import {map, mergeMap, toArray} from "rxjs/operators";


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;
  // wins: number;
  //  teamTest: Observable<TeamTest[]>;
  teamTest: unknown[];


  constructor(private teamService: TeamService, private router: Router, private gameService: GameService) {
  }

  ngOnInit() {
    // this.getNumber(1);
    // this.reloadData();
    this.showOverallTableOfTeams();
  }


  reloadData() {
    this.teams = this.teamService.getTeamsList();
  }

  updateTeam(id: number) {
    this.router.navigate(['update', id]);
  }

  teamDetails(id: number) {
    this.router.navigate(['/details', id]);

  }


  showOverallTableOfTeams() {
    this.teamService.getTeamsList()
      .pipe(
        mergeMap(res => {
          return from(res).pipe(
            mergeMap(teamTest => {

              // @ts-ignore
              const {teamId} = teamTest;
              return forkJoin([
                this.gameService.getGameStatusByTeam(teamId, "win"),
                this.gameService.getGameStatusByTeam(teamId, "loss"),
                this.gameService.getGameStatusByTeam(teamId, "overtime_lose"),
                this.gameService.getPointsByTeam(teamId),
                this.gameService.getGoalsForTeam(teamId),
                this.gameService.getGoalsAgainstTeam(teamId),
                this.gameService.getNumberOfGamesPlayedByTeam(teamId)
              ]).pipe(
                map(data => {
                  // @ts-ignore
                  teamTest.wins = data[0];
                  // @ts-ignore
                  teamTest.loses = data[1];
                  // @ts-ignore
                  teamTest.overtimeLoses = data[2];
                  // @ts-ignore
                  teamTest.points = data[3];
                  // @ts-ignore
                  teamTest.goalsFor = data[4];
                  // @ts-ignore
                  teamTest.goalsAgainst = data[5];
                  // @ts-ignore
                  teamTest.gamesPlayed = data[6];
                  return teamTest;
                })
              )
            }),
            toArray()
          );
        })
      )
      .subscribe(value => {
        this.teamTest = value;
        console.log(value)
      });
  }

  showHomeTableOfTeams() {
    this.teamService.getTeamsList()
      .pipe(
        mergeMap(res => {
          return from(res).pipe(
            mergeMap(teamTest => {

              // @ts-ignore
              const {teamId} = teamTest;
              return forkJoin([
                this.gameService.getGameStatusByHomeTeam(teamId, "win"),
                this.gameService.getGameStatusByHomeTeam(teamId, "loss"),
                this.gameService.getGameStatusByHomeTeam(teamId, "overtime_lose"),
                this.gameService.getPointsByHomeTeam(teamId),
                this.gameService.getGoalsForHomeTeam(teamId),
                this.gameService.getAwayGoalsAgainstTeam(teamId),
                this.gameService.getNumberOfGamesPlayedByHomeTeam(teamId)
              ]).pipe(
                map(data => {
                  // @ts-ignore
                  teamTest.wins = data[0];
                  // @ts-ignore
                  teamTest.loses = data[1];
                  // @ts-ignore
                  teamTest.overtimeLoses = data[2];
                  // @ts-ignore
                  teamTest.points = data[3];
                  // @ts-ignore
                  teamTest.goalsFor = data[4];
                  // @ts-ignore
                  teamTest.goalsAgainst = data[5];
                  // @ts-ignore
                  teamTest.gamesPlayed = data[6];
                  return teamTest;
                })
              )
            }),
            toArray()
          );
        })
      )
      .subscribe(value => {
        this.teamTest = value;
        console.log(value)
      });
  }


  showAwayTableOfTeams() {
    this.teamService.getTeamsList()
      .pipe(
        mergeMap(res => {
          return from(res).pipe(
            mergeMap(teamTest => {

              // @ts-ignore
              const {teamId} = teamTest;
              return forkJoin([
                this.gameService.getGameStatusByAwayTeam(teamId, "win"),
                this.gameService.getGameStatusByAwayTeam(teamId, "loss"),
                this.gameService.getGameStatusByAwayTeam(teamId, "overtime_lose"),
                this.gameService.getPointsByAwayTeam(teamId),
                this.gameService.getGoalsForAwayTeam(teamId),
                this.gameService.getHomeGoalsAgainstTeam(teamId),
                this.gameService.getNumberOfGamesPlayedByAwayTeam(teamId)
              ]).pipe(
                map(data => {
                  // @ts-ignore
                  teamTest.wins = data[0];
                  // @ts-ignore
                  teamTest.loses = data[1];
                  // @ts-ignore
                  teamTest.overtimeLoses = data[2];
                  // @ts-ignore
                  teamTest.points = data[3];
                  // @ts-ignore
                  teamTest.goalsFor = data[4];
                  // @ts-ignore
                  teamTest.goalsAgainst = data[5];
                  // @ts-ignore
                  teamTest.gamesPlayed = data[6];
                  return teamTest;
                })
              )
            }),
            toArray()
          );
        })
      )
      .subscribe(value => {
        this.teamTest = value;
        console.log(value)
      });
  }


}
