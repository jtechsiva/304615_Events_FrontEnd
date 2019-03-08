import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: any;
  redirectTo: any;
  constructor(private router: Router, private userService: UserService,
             private activatedRoute: ActivatedRoute) {
              this.activatedRoute.params.subscribe(params => {
                switch (params.message) {
                  case 'M001': 
                      this.message = "User has been logout successfully !!!";
                      this.userService.deleteToken();
                      this.redirectTo = '/signin';
                      break;
                  case 'M002': 
                      this.message = "User detail has been updated successfully !!!";
                      this.redirectTo = '/userlist';
                      break;
                  case 'M003':
                    this.message = "User detail has been deleted successfully !!!";
                    this.redirectTo = '/signin';
                    break;
                  case 'M004':
                    this.message = "Your request has been registered successfully !!!";
                    //this.router.navigate(['/userlist']);
                    this.redirectTo = '/userlist';
                    break;
                  default:
                      this.message = "User has been deleted successfully !!!";
                      this.redirectTo = '/signin';
              }

                               
              });
           }

  ngOnInit() {
  }

}
