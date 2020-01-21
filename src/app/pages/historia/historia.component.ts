import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  user: FormGroup;

  constructor() {}
  
  ngOnInit() {
    this.user= new FormGroup({
       fullName: new FormControl(),
       email: new FormControl(),
       skills: new FormGroup({
         skillName: new FormControl(),
         experienceInYears: new FormControl(),
         proficiency: new FormControl()
       })
    });
  }

    onSubmit(): void {
      console.log(this.user);
    }
}
