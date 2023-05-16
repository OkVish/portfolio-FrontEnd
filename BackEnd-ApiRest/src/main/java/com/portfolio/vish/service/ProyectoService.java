
package com.portfolio.vish.service;

import com.portfolio.vish.model.Proyecto;
import com.portfolio.vish.repository.ProyectoRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Vish
 */
@Service
@Transactional
public class ProyectoService {
  private final ProyectoRepository proyectoRespository;

    public ProyectoService( ProyectoRepository proyectoRespository) {
        this.proyectoRespository = proyectoRespository;
    }

    public Proyecto addProyecto(Proyecto proyecto){
        return proyectoRespository.save(proyecto);
    }
    public Proyecto updateProyecto(Proyecto proyecto){
        return proyectoRespository.save(proyecto);
    }
    public List<Proyecto> findAllProyectos(){
        return proyectoRespository.findAll();
    }
    public void deleteProyecto(Long id){
        proyectoRespository.deleteById(id);
    }
}