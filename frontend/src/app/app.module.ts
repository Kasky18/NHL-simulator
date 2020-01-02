import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {TeamDetailsComponent} from './team-details/team-details.component';
import {TeamListComponent} from './team-list/team-list.component';
import {FormsModule} from "@angular/forms";
import {UpdateTeamComponent} from './update-team/update-team.component';
import {HttpClientModule} from "@angular/common/http";
import {GameListComponent} from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTeamComponent,
    TeamDetailsComponent,
    TeamListComponent,
    UpdateTeamComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
