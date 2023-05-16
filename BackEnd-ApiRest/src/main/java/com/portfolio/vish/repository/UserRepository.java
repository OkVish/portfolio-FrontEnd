
package com.portfolio.vish.repository;

import com.portfolio.vish.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Vish
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
}