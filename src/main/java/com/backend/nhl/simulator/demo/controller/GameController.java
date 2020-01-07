package com.backend.nhl.simulator.demo.controller;

import com.backend.nhl.simulator.demo.exceptions.ResourceNotFoundException;
import com.backend.nhl.simulator.demo.model.Game;
import com.backend.nhl.simulator.demo.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GameController {

    @PersistenceContext
    private EntityManager manager;

    @Autowired
    private GameRepository gameRepository;

    /*
     * vrati zoznam vsetkych zapasov + vsetkych podla timu a kola
     * */
    @GetMapping("/games")
    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    @GetMapping("/games/{id}")
    public ResponseEntity<Game> getGameById(@PathVariable(value = "id") int gameId) throws ResourceNotFoundException {
        Game game = gameRepository.findById(gameId).orElseThrow(() -> new ResourceNotFoundException("Game not found for this id :: " + gameId));
        return ResponseEntity.ok().body(game);
    }

    @GetMapping("/games/round/{round}")
    public List<Game> getGamesByRound(@PathVariable(value = "round") int round) {
        List<Game> games = manager.createNamedQuery("Game.getGamesByRound", Game.class).setParameter("round", round).getResultList();
        return games;
    }


    /*
     * vrati pocet vyhier, prehier, atd. pre domaci,hostujuci tim + celkovo
     * */
    @GetMapping("/games/home/{status}/{id}")
    public Integer getGameStatusByHomeTeam(@PathVariable(value = "status") String status, @PathVariable(value = "id") int id) {
        Integer games = ((Number) manager.createNamedQuery("Game.getHomeStatusByTeam").setParameter("homeTeamStatus", status).setParameter("id", id).getSingleResult()).intValue();
        return games;
    }

    @GetMapping("/games/away/{status}/{id}")
    public Integer getGameStatusByAwayTeam(@PathVariable(value = "status") String status, @PathVariable(value = "id") int id) {
        Integer games = ((Number) manager.createNamedQuery("Game.getAwayStatusByTeam").setParameter("awayTeamStatus", status).setParameter("id", id).getSingleResult()).intValue();
        return games;
    }

    @GetMapping("/games/{status}/{id}")
    public Integer getGameStatusByTeam(@PathVariable(value = "status") String status, @PathVariable(value = "id") int id) {
        return getGameStatusByHomeTeam(status, id) + getGameStatusByAwayTeam(status, id);
    }

    /*
     * vrati zoznam domacich a hostujucich zapasov timu
     * */
    @GetMapping("/home/games/{id}")
    public List<Game> getHomeGamesByTeam(@PathVariable(value = "id") int id) {
        return manager.createNamedQuery("Game.getHomeGamesByTeam", Game.class).setParameter("id", id).getResultList();
    }

    @GetMapping("/away/games/{id}")
    public List<Game> getAwayGamesByTeam(@PathVariable(value = "id") int id) {
        return manager.createNamedQuery("Game.getAwayGamesByTeam", Game.class).setParameter("id", id).getResultList();
    }

    /*
     * vrati celkovy pocet zapasov timu
     * */
    @GetMapping("/games/all/{id}")
    public Integer getNumberOfGamesByTeam(@PathVariable(value = "id") int id) {
        return getHomeGamesByTeam(id).size() + getAwayGamesByTeam(id).size();
    }

    /*
     * vrati pocet vstrelenych golov v domacich, hostujucih zapasov + celkovo pre tim
     * */
    @GetMapping("/home/goals/for/{id}")
    public Integer getHomeGoalsForByTeam(@PathVariable(value = "id") int id) {

        Integer goals = null;
        try {
            goals = ((Number) manager.createNamedQuery("Game.getHomeGoalsForByTeam").setParameter("id", id).getSingleResult()).intValue();
        } catch (NoResultException e) {
            System.out.println("No result found.");
        }

        return (goals == null) ? 0 : goals;
    }

    @GetMapping("/away/goals/for/{id}")
    public Integer getAwayGoalsForByTeam(@PathVariable(value = "id") int id) {
        Integer goals = null;
        try {
            goals = ((Number) manager.createNamedQuery("Game.getAwayGoalsForByTeam").setParameter("id", id).getSingleResult()).intValue();
        } catch (NoResultException e) {
            System.out.println("No result found.");
        }

        return (goals == null) ? 0 : goals;
    }

    @GetMapping("/goals/for/{id}")
    public Integer getAllGoalsForByTeam(@PathVariable(value = "id") int id) {
        return getHomeGoalsForByTeam(id) + getAwayGoalsForByTeam(id);
    }


    /*
     * vrati pocet inkasovanych golov v domacich, hostujucih zapasov + celkovo pre tim
     * */
    @GetMapping("/home/goals/against/{id}")
    public Integer getHomeGoalsAgainstByTeam(@PathVariable(value = "id") int id) {

        Integer goals = null;
        try {
            goals = ((Number) manager.createNamedQuery("Game.getHomeGoalsAgainstByTeam").setParameter("id", id).getSingleResult()).intValue();
        } catch (NoResultException e) {
            System.out.println("No result found.");
        }

        return (goals == null) ? 0 : goals;
    }

    @GetMapping("/away/goals/against/{id}")
    public Integer getAwayGoalsAgainstByTeam(@PathVariable(value = "id") int id) {
        Integer goals = null;
        try {
            goals = ((Number) manager.createNamedQuery("Game.getAwayGoalsAgainstByTeam").setParameter("id", id).getSingleResult()).intValue();
        } catch (NoResultException e) {
            System.out.println("No result found.");
        }

        return (goals == null) ? 0 : goals;
    }


    @GetMapping("/goals/against/{id}")
    public Integer getAllGoalsAgainstByTeam(@PathVariable(value = "id") int id) {
        return getHomeGoalsAgainstByTeam(id) + getAwayGoalsAgainstByTeam(id);
    }


    @GetMapping("/points/{id}")
    public Integer getAllPointsByTeam(@PathVariable(value = "id") int id) {
        Integer points = getGameStatusByTeam("win", id) * 2;
        return points;
    }


}
