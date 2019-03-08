import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title : string;
  
  userDet: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService) { }
 
  
  ngOnInit() {
   this.userService.refreshNeeded.subscribe(() => {
     this.getLoggedUser();
   });
   this.getLoggedUser();
  }

  getLoggedUser(){
   this.userService.getUserProfile().subscribe(data => {
     this.userDet = data['user'];   
     localStorage.setItem("userID", this.userDet.empId);
   });
   
  }
  
}
