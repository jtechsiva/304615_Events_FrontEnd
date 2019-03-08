import { Component, OnInit  } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userDetail: any;
  userProfileForm : FormGroup;
  userId: string;

  selectedUserType : any;
  uStatus: any;

  color = 'accent';
  checked = false;
  disabled = false;

  UserTypes: string[] = ['Admin', 'PMO', 'Normal'];
  UserStatus: string[] = ['Active', 'Disabled'];
  
  constructor(private formBuilder: FormBuilder,
            private userService: UserService, 
            private router: Router,
            private activatedRoute: ActivatedRoute) {
              this.activatedRoute.params.subscribe(params => {
                this.userId = params.id                
              });
          
              this.initializeForm();
              
             // console.log("User ID: " + this.userId);
             }

  ngOnInit() {
    
    this.LoadUserDataToForm();    
  }

  initializeForm() {
    this.userProfileForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    displayName: ['', [Validators.required]],
    role: ['', [Validators.required]],
    userStatus: ['']
    });
    
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.userProfileForm.controls[controlName].hasError(errorName);
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
          role: this.userDetail.role,
          userStatus: this.userDetail.userStatus
        });        
      },
      err => {}
    );
  }

  updateUser(){
    let formData = this.userProfileForm.value;
    console.log(JSON.stringify(formData));    
    this.userService.updateUserDet(this.userId, formData).subscribe(
      res => {
        console.log('User Detail has been successfully updated !!!');
        this.router.navigate(['/message/M003']);
      },
      err => { console.log('Error in updating the User: ' + JSON.stringify(err, undefined, 2) );
      }      
    );
  }

  resetForm(){
    this.initializeForm();
  }
  

  
    
}
