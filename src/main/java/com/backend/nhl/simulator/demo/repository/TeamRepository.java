package com.backend.nhl.simulator.demo.repository;

import com.backend.nhl.simulator.demo.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {


}
