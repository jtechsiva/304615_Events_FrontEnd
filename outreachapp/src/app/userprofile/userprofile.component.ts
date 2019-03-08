import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetail: any;
  userProfileForm : FormGroup;
  userId: string;

  selectedUserType: string;
  UserTypes: string[] = ['Admin', 'PMO', 'Normal'];
  constructor(private formBuilder: FormBuilder,
            private userService: UserService, 
            private router: Router,
            private activatedRoute: ActivatedRoute) {
              this.activatedRoute.params.subscribe(params => {
                this.userId = params.id;
                this.userProfileForm = formBuilder.group({
                  hideRequired: false,
                  floatLabel: 'auto',
                });
              });
          
              this.initializeForm();
              console.log("User ID: " + this.userId);
             }

  ngOnInit() {
    
    this.LoadUserDataToForm();    
  }

  initializeForm() {
    this.userProfileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required]],
    displayName: ['', [Validators.required]],
    userType : ['', [Validators.required]]
    });
  }

  LoadUserDataToForm(){
    this.userService.getUser(this.userId).subscribe(
      res => {
        this.userDetail = res;              
        this.userProfileForm.patchValue({
          firstName: this.userDetail.firstName,
          lastName: this.userDetail.lastName,
          email: this.userDetail.email,
          displayName: this.userDetail.displayName,
        });        
      },
      err => {}
    );
  }

  updateUser(){
    let formData = this.userProfileForm.value;
    this.userService.updateUserDet(this.userId, formData).subscribe(
      res => {
        console.log('User Detail has been successfully updated !!!');
        this.router.navigate(['userlist']);
      },
      err => { console.log('Error in updating the User: ' + JSON.stringify(err, undefined, 2) );
      }      
    );
  }

  
}
