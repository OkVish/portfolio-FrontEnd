
package com.portfoliovish.vish.Service;

import com.portfoliovish.vish.Entity.Persona;
import com.portfoliovish.vish.Repository.interface_persona_repository;
import jakarta.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Vish
 */
@Service
@Transactional
public class implementacion_persona_service {

    @Autowired
    interface_persona_repository interface_persona_repository;
    
    public List<Persona> list(){
         return interface_persona_repository.findAll();
     }
     
     public Optional<Persona> getOne(int id){
         return interface_persona_repository.findById(id);
     }
     
     public Optional<Persona> getByNombre(String nombre){
         return interface_persona_repository.findByNombre(nombre);
     }
     
     public void save(Persona persona){
         interface_persona_repository.save(persona);
     }
     
     public void delete(int id){
         interface_persona_repository.deleteById(id);
     }
     
     public boolean existsById(int id){
         return interface_persona_repository.existsById(id);
     }
     
     public boolean existsByNombre(String nombre){
         return interface_persona_repository.existsByNombre(nombre);
     }
}
