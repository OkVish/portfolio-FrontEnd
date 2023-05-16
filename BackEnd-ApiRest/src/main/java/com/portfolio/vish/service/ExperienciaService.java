
package com.portfolio.vish.service;

import com.portfolio.vish.model.Experiencia;
import com.portfolio.vish.repository.ExperienciaRepository;
import jakarta.transaction.Transactional;
import java.util.List;
import org.springframework.stereotype.Service;


/**
 *
 * @author Vish
 */
@Service
@Transactional
public class ExperienciaService {

   private final ExperienciaRepository experienciaRespository;

    public ExperienciaService(ExperienciaRepository experienciaRespository) {
        this.experienciaRespository = experienciaRespository;
    }

    public Experiencia addExperiencia(Experiencia experiencia){
        return experienciaRespository.save(experiencia);
    }

    public Experiencia updateExperiencia(Experiencia experiencia){
        return experienciaRespository.save(experiencia);
    }

    public List<Experiencia> findAllExperiencia(){
        return experienciaRespository.findAll();
    }

    public void deleteExperiencia(long id){
        experienciaRespository.deleteById(id);
    }
}