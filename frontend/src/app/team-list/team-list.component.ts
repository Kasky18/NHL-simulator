import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Team} from "../team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";
import {GameService} from "../game.service";


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams: Observable<Team[]>;
  wins: number;


  constructor(private teamService: TeamService, private router: Router, private gameService: GameService) {
  }

  ngOnInit() {
    // this.getNumber(1);
    this.reloadData();
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

  getNumber(id: number) {
    this.gameService.getGameStatusByTeam(id, "win").subscribe((data) => this.wins = data);
    console.log(id, this.wins);

  }

  // submit(id)  {
  //   const combined = forkJoin([
  //     this.teamService.getTeamsList(),
  //     this.gameService.getGameStatusByTeam(id,"win")
  //   ]);
  //   combined.subscribe((response) => {
  //     // you will get 2 arrays in response
  //
  //     this.teams = response[0];
  //    this.wins = response[1];
  //     console.log("co som dostal",this.teams);
  //     console.log("vyhry",this.wins);
  //     this.ids.push(this.teams);
  //     this.ids.push(this.wins);
  //
  //     //this.teams.forEach(team => this.ids.push(team.teamId));
  //   });
  //  console.log("co som dostal za id",this.ids);
  // }

}
