
package com.portfolio.vish.repository;

import com.portfolio.vish.model.Proyecto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vish
 */
@Repository
public interface ProyectoRepository extends JpaRepository<Proyecto, Integer> {

    public void deleteById(Long id);
}