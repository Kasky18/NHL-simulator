import {Component, OnInit} from '@angular/core';
import {Team} from "../team";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../team.service";

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  id: number;
  team: Team;
  submitted = false;

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

  updateTeam() {
    this.teamService.updateTeam(this.id, this.team).subscribe(data => console.log(data), error => console.log(error));
    this.team = new Team();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateTeam();
  }

  gotoList() {
    this.router.navigate(['/teams']);
  }

}
