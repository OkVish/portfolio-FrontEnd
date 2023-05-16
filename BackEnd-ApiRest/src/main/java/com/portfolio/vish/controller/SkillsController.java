
package com.portfolio.vish.controller;

import com.portfolio.vish.model.Skills;
import com.portfolio.vish.service.SkillsService;
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
@RequestMapping("/api/skills")

public class SkillsController {
    @Autowired
    private final SkillsService skillService;

    public SkillsController(SkillsService skillService) {
        this.skillService = skillService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<Skills>> getAllSkill(){
        List<Skills> projects=skillService.findAllSkills();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Skills> addSkill(@RequestBody Skills skills){
        Skills newSkill=skillService.addSkills(skills);
        return new ResponseEntity<>(newSkill,HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Skills> updateSkill(@RequestBody Skills skills){
        Skills updateSkill=skillService.updateSkills(skills);
        return new ResponseEntity<>(updateSkill,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSkill(@PathVariable("id") Long id){
        skillService.deleteSkills(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}