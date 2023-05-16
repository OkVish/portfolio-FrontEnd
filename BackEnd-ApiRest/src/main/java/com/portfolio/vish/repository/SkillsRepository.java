
package com.portfolio.vish.repository;

import com.portfolio.vish.model.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vish
 */
@Repository
public interface SkillsRepository extends JpaRepository<Skills, Integer> {

    public void deleteById(Long id);
}
