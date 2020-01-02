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

  getNumber(id : number){
    this.gameService.getGameStatusByTeam(id,"win").subscribe((data) => this.wins=data);
    console.log(id,this.wins);

  }

}
