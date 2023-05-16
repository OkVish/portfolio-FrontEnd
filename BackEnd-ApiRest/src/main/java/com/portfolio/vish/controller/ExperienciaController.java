
package com.portfolio.vish.controller;

import com.portfolio.vish.model.Experiencia;
import com.portfolio.vish.service.ExperienciaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 *
 * @author Vish
 */
@RestController
@RequestMapping("/api/exp")


public class ExperienciaController {
    @Autowired
    private final ExperienciaService experienciaService;

    public ExperienciaController(ExperienciaService experienciaService) {
        this.experienciaService = experienciaService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Experiencia>> getAllExperiencia(){
        List<Experiencia> experiencias=experienciaService.findAllExperiencia();
        return new ResponseEntity<>(experiencias, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Experiencia> addExperiencia(@RequestBody Experiencia experiencia){
        Experiencia newExperiencia=experienciaService.addExperiencia(experiencia);
        return new ResponseEntity<>(newExperiencia,HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Experiencia> updateExperiencia(@RequestBody Experiencia experiencia){
        Experiencia updateExperiencia=experienciaService.updateExperiencia(experiencia);
        return new ResponseEntity<>(updateExperiencia,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteExperiencia(@PathVariable("id") Long id){
        experienciaService.deleteExperiencia(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}