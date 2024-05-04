import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-bloodbank',
  templateUrl: './bloodbank.component.html',
  styleUrls: ['./bloodbank.component.css']
})
export class BloodbankComponent implements OnInit {

  valid: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
   
  }
my(){
  this.router.navigate(['/main']);
}

}