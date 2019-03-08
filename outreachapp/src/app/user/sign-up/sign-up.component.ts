import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,FormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  responseMessage: string;
  isSuccess: boolean;
  
  constructor(private formBuilder: FormBuilder, 
  private userService: UserService, 
  private router: Router) { }
  
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      email: ['', Validators.compose([Validators.required, Validators.email, 
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      confirmPassword: ['', [Validators.required]],
      displayName: ['', [Validators.required]]
    });
   }

  //  public hasError = (controlName: string, errorName: string) =>{
  //   return this.signupForm.controls[controlName].hasError(errorName);
  // }

   addUser(){
    if (this.signupForm.valid) {
      let data = this.signupForm.value;
      this.userService.addUser(data).subscribe(
        res => {
          this.router.navigate(['userlist']);
        },
        err => {
          this.isSuccess = false;
          if(err.status === 422) {
          this.responseMessage = err.error.join('</br>');
          }
          else{
            this.responseMessage = "Something went wrong. Please condact admin.";
          }
        }
    )};
  }
}
