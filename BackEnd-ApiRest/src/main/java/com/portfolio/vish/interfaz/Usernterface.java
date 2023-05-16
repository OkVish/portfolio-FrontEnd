
package com.portfolio.vish.interfaz;

import com.portfolio.vish.model.User;
import java.util.List;

/**
 *
 * @author Vish
 */
public interface Usernterface {
     public List<User> getPersona();
    
    public void saveUser(User user);
    
    public void deleteUser(int id);
    
    public User findUser(int id); 
}
