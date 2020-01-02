import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamDetailsComponent} from "./team-details/team-details.component";
import {UpdateTeamComponent} from "./update-team/update-team.component";
import {CreateTeamComponent} from "./create-team/create-team.component";
import {GameListComponent} from "./game-list/game-list.component";


const routes: Routes = [
  {path: '', redirectTo: 'team', pathMatch: 'full'},
  {path: 'teams', component: TeamListComponent},
  {path: 'games', component: GameListComponent},
  {path: 'add', component: CreateTeamComponent},
  {path: 'update/:id', component: UpdateTeamComponent},
  {path: 'details/:id', component: TeamDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
