import {Component, OnInit} from '@angular/core';
import {SocketService} from "../../services/socket/socket.service";
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  usersList: Array<string>;
  usersCount: number;

  constructor(private router: Router){ }
 

  ngOnInit() {
  }

  my(){
    this.router.navigate(['hospital']);
  }
  my2(){
    this.router.navigate(['bloodbank']);
  }
  my3(){
    this.router.navigate(['hospital']);
  }
  my4(){
    this.router.navigate(['hospital']);
  }

}

