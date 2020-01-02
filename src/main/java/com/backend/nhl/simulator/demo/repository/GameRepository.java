package com.backend.nhl.simulator.demo.repository;

import com.backend.nhl.simulator.demo.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Integer> {


}
