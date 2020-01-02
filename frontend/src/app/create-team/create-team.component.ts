import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {TeamService} from "../team.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = new Team();
  submitted = false;

  constructor(private teamService: TeamService, private router: Router) {
  }

  ngOnInit() {
  }

  newTeam(): void {
    this.submitted = false;
    this.team = new Team();
  }

  save() {
    this.teamService.createTeam(this.team).subscribe(data => console.log(data), error => console.log(error));
    this.team = new Team();
    this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['/teams']);
  }

}
