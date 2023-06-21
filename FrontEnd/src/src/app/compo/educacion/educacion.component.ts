import { Component, OnInit } from "@angular/core";
import { Education } from "src/app/model/education";
import { EducationService } from "src/app/services/education.service";


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducationComponent implements OnInit {
  public educations: Education[] = [];
  public newEducation: Education = {
    nombreedu: "",
    lugaredu: "",
    cursoedu: "",
    urledu: "",
    id: 0
  }; 
  public selectedEducation: Education = {
    nombreedu: "",
    lugaredu: "",
    cursoedu: "",
    urledu: "",
    id: 0
  }; 

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  getEducations(): void {
    this.educationService.getEducation().subscribe(
      (educations: Education[]) => {
        this.educations = educations;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  addEducation(education: Education): void {
    this.educationService.addEducation(education).subscribe(
      (newEducation: Education) => {
        this.educations.push(newEducation);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateEducation(education: Education): void {
    this.educationService.updateEducation(education).subscribe(
      (updatedEducation: Education) => {
        const index = this.educations.findIndex(e => e.id === updatedEducation.id);
        if (index !== -1) {
          this.educations[index] = updatedEducation;
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  deleteEducation(educationId: number): void {
    this.educationService.deleteEducation(educationId).subscribe(
      () => {
        this.educations = this.educations.filter(e => e.id !== educationId);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}