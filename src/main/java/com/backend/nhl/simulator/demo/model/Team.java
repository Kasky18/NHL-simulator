package com.backend.nhl.simulator.demo.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "teams")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int teamId;

    private String teamName;
    private char division;
    private char conference;
    private String teamShortcut;

    @OneToMany(mappedBy = "homeTeam")
    @JsonManagedReference
    private Set<Game> homeGames;

    @OneToMany(mappedBy = "awayTeam")
    @JsonManagedReference
    private Set<Game> awayGames;


    public Team() {

    }

    public Team(String teamName, char division, char conference, String teamShortcut, Set<Game> homeGames, Set<Game> awayGames) {
        this.teamName = teamName;
        this.division = division;
        this.conference = conference;
        this.teamShortcut = teamShortcut;
        this.homeGames = homeGames;
        this.awayGames = awayGames;
    }

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamsId) {
        this.teamId = teamsId;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public char getDivision() {
        return division;
    }

    public void setDivision(char division) {
        this.division = division;
    }

    public char getConference() {
        return conference;
    }

    public void setConference(char conference) {
        this.conference = conference;
    }

    public String getTeamShortcut() {
        return teamShortcut;
    }

    public void setTeamShortcut(String teamShortcut) {
        this.teamShortcut = teamShortcut;
    }

    public Set<Game> getHomeGames() {
        return homeGames;
    }

    public void setHomeGames(Set<Game> homeGames) {
        this.homeGames = homeGames;
    }

    public Set<Game> getAwayGames() {
        return awayGames;
    }

    public void setAwayGames(Set<Game> awayGames) {
        this.awayGames = awayGames;
    }
}
