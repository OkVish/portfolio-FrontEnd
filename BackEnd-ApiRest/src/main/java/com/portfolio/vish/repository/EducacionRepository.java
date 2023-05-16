
package com.portfolio.vish.repository;

import com.portfolio.vish.model.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vish
 */
@Repository
public interface EducacionRepository extends JpaRepository<Educacion, Integer> {

    public void deleteById(Long id);
}