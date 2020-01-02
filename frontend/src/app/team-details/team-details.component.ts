import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  id: number;
  team: Team;

  constructor(private route: ActivatedRoute, private router: Router, private teamService: TeamService) {
  }

  ngOnInit() {
    this.team = new Team();

    this.id = this.route.snapshot.params['id'];

    this.teamService.getTeamById(this.id).subscribe(data => {
      console.log(data);
      this.team = data;
    }, error => console.log(error));
  }

  list() {
    this.router.navigate(['teams']);
  }

}
