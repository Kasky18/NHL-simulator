package com.backend.nhl.simulator.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity(name = "Game")
@Table(name = "games")
//@NamedNativeQuery(name = "Game.getGamesByRound",
//        query = "SELECT g FROM games g ",resultClass = Game.class)
//@NamedQuery(name = Game.GET_GAMES_BY_ROUND,
//        query = "SELECT g FROM Game g")
@NamedQueries({
        @NamedQuery(name = "Game.getGamesByRound",
                query = "SELECT g FROM Game g where g.round = :round "),
        @NamedQuery(name = "Game.getHomeStatusByTeam",
                query = "SELECT count(g.homeTeamStatus) FROM Game g where (g.homeTeamStatus = :homeTeamStatus and g.homeTeam.teamId = :id) "),
        @NamedQuery(name = "Game.getAwayStatusByTeam",
                query = "SELECT count(g.awayTeamStatus) FROM Game g where (g.awayTeamStatus = :awayTeamStatus and g.awayTeam.teamId = :id) "),
        @NamedQuery(name = "Game.getHomeGamesByTeam",
                query = "SELECT g FROM Game g where g.homeTeam.teamId = :id"),
        @NamedQuery(name = "Game.getAwayGamesByTeam",
                query = "SELECT g FROM Game g where g.awayTeam.teamId = :id "),

        @NamedQuery(name = "Game.getHomeGoalsForByTeam",
                query = "SELECT sum(g.homeGoals)FROM Game g group by g.homeTeam.teamId having g.homeTeam.teamId= :id "),
        @NamedQuery(name = "Game.getAwayGoalsForByTeam",
                query = "SELECT sum(g.awayGoals)FROM Game g group by g.awayTeam.teamId having g.awayTeam.teamId= :id "),

        @NamedQuery(name = "Game.getHomeGoalsAgainstByTeam",
                query = "SELECT sum(g.homeGoals)FROM Game g group by g.awayTeam.teamId having g.awayTeam.teamId= :id "),
        @NamedQuery(name = "Game.getAwayGoalsAgainstByTeam",
                query = "SELECT sum(g.awayGoals)FROM Game g group by g.homeTeam.teamId having g.homeTeam.teamId= :id "),

})
public class Game {

    //  SELECT count(g.home_team_status) FROM games g where (g.home_team_status = "win" and g.home_team_team_id = 3)

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int game_id;
    private int round;

    private String homeTeamStatus;
    private String awayTeamStatus;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonBackReference
    private Team homeTeam;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonBackReference
    private Team awayTeam;

    private int homeGoals;
    private int awayGoals;

    public Game() {
    }

    public int getGame_id() {
        return game_id;
    }

    public void setGame_id(int game_id) {
        this.game_id = game_id;
    }

    public int getRound() {
        return round;
    }

    public void setRound(int round) {
        this.round = round;
    }

    public String getHomeTeamStatus() {
        return homeTeamStatus;
    }

    public void setHomeTeamStatus(String homeTeamStatus) {
        this.homeTeamStatus = homeTeamStatus;
    }

    public String getAwayTeamStatus() {
        return awayTeamStatus;
    }

    public void setAwayTeamStatus(String awayTeamStatus) {
        this.awayTeamStatus = awayTeamStatus;
    }

    public Team getHomeTeam() {
        return homeTeam;
    }

    public void setHomeTeam(Team homeTeam) {
        this.homeTeam = homeTeam;
    }

    public Team getAwayTeam() {
        return awayTeam;
    }

    public void setAwayTeam(Team awayTeam) {
        this.awayTeam = awayTeam;
    }

    public int getHomeGoals() {
        return homeGoals;
    }

    public void setHomeGoals(int homeGoals) {
        this.homeGoals = homeGoals;
    }

    public int getAwayGoals() {
        return awayGoals;
    }

    public void setAwayGoals(int awayGoals) {
        this.awayGoals = awayGoals;
    }
}
