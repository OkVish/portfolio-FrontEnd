
package com.portfolio.vish.repository;

import com.portfolio.vish.model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vish
 */
@Repository
public interface ExperienciaRepository extends JpaRepository<Experiencia, Integer> {

    public void deleteById(long id);
 
}