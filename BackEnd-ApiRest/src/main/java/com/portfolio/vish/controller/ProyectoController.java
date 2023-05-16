
package com.portfolio.vish.controller;

/**
 *
 * @author Vish
 */

import com.portfolio.vish.model.Proyecto;
import com.portfolio.vish.service.ProyectoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/proyecto")
public class ProyectoController {
    @Autowired
    private final ProyectoService projectService;

    public ProyectoController(ProyectoService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Proyecto>> getAllProyecto(){
        List<Proyecto> projects=projectService.findAllProyectos();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Proyecto> addProyecto(@RequestBody Proyecto proyecto){
        Proyecto newProject=projectService.addProyecto(proyecto);
        return new ResponseEntity<>(newProject,HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Proyecto> updateProyecto(@RequestBody Proyecto proyecto){
        Proyecto updateProject=projectService.updateProyecto(proyecto);
        return new ResponseEntity<>(updateProject,HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteProyecto(@PathVariable("id") Long id){
        projectService.deleteProyecto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}