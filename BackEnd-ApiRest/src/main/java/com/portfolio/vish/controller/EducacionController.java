
package com.portfolio.vish.controller;

import com.portfolio.vish.model.Educacion;
import com.portfolio.vish.service.EducacionService;
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
@RequestMapping("/api/edu")
public class EducacionController {
    @Autowired
    private final EducacionService educationService;

    public EducacionController(EducacionService educationService) {
        this.educationService = educationService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Educacion>> getAllEducation(){
        List<Educacion> educations=educationService.findAllEducacion();
        return new ResponseEntity<>(educations, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Educacion> addEducation(@RequestBody Educacion educacion){
        Educacion newEducation=educationService.addEducacion(educacion);
        return new ResponseEntity<>(newEducation,HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Educacion> updateEducation(@RequestBody Educacion educacion){
        Educacion updateEducation=educationService.updateEducacion(educacion);
        return new ResponseEntity<>(updateEducation,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEducation(@PathVariable("id") Long id){
        educationService.deleteEducacion(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}