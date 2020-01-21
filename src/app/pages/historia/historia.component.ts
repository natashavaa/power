import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export interface User {
  name: string;
  password: string;
  passwordRepeat: string,
}

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  user: FormGroup;

  constructor(private fb: FormBuilder) {}
  
  ngOnInit() {
  }

}
