package com.backend.nhl.simulator.demo.model;


import javax.persistence.*;

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


    public Team() {

    }

    public Team(int teamId, String teamName, char division, char conference, String teamShortcut) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.division = division;
        this.conference = conference;
        this.teamShortcut = teamShortcut;
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
}
