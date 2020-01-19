package com.backend.nhl.simulator.demo.controller;

import com.backend.nhl.simulator.demo.exceptions.ResourceNotFoundException;
import com.backend.nhl.simulator.demo.model.Team;
import com.backend.nhl.simulator.demo.repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @GetMapping("/teams")
    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    @GetMapping("/teams/{id}")
    public ResponseEntity<Team> getTeamById(@PathVariable(value = "id") int teamId) throws ResourceNotFoundException {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new ResourceNotFoundException("Team not found for this id :: " + teamId));
        return ResponseEntity.ok().body(team);
    }


    @PostMapping("/teams")
    public Team createTeam(@Valid @RequestBody Team team) {
        return teamRepository.save(team);
    }

    @PutMapping("/teams/{id}")
    public ResponseEntity<Team> updateTeam(@PathVariable(value = "id") int teamId,
                                           @Valid @RequestBody Team teamDetails) throws ResourceNotFoundException {
        Team team = teamRepository.findById(teamId).orElseThrow(() -> new ResourceNotFoundException("Team not found for this id :: " + teamId));

        team.setTeamName(teamDetails.getTeamName());
        team.setTeamShortcut(teamDetails.getTeamShortcut());
        team.setConference(teamDetails.getConference());
        team.setDivision(teamDetails.getDivision());

        final Team updatedTeam = teamRepository.save(team);
        return ResponseEntity.ok(updatedTeam);
    }


}
