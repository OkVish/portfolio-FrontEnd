import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
}) 
export class SkillComponent implements OnInit {
  public skills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
    this.getSkills();
  }

  getSkills(): void {
    this.skillService.getSkill().subscribe(
      (skills: Skill[]) => {
        this.skills = skills;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addSkill(skill: Skill): void {
    this.skillService.addSkill(skill).subscribe(
      (newSkill: Skill) => {
        this.skills.push(newSkill);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateSkill(skill: Skill): void {
    this.skillService.updateSkill(skill).subscribe(
      (updatedSkill: Skill) => {
        const index = this.skills.findIndex(s => s.id === updatedSkill.id);
        if (index !== -1) {
          this.skills[index] = updatedSkill;
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteSkill(skillId: number): void {
    this.skillService.deleteSkill(skillId).subscribe(
      () => {
        this.skills = this.skills.filter(s => s.id !== skillId);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}