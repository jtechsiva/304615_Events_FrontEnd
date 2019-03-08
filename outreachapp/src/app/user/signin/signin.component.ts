import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})


export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  isSuccess: boolean;
  responseMessage: string;
  
  hide = true;

  constructor(private formBuilder: FormBuilder, 
    private userService: UserService, 
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]        
    });
    if(this.userService.isLoggedIn())
      this.router.navigate(['/userlist']);
  }

  onSubmit(){
    if (this.signinForm.valid) {
      let data = this.signinForm.value;
      this.userService.login(data).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.userService.getUserProfile();
          this.router.navigate(['/userlist']);
        },
        err => {
          this.isSuccess = false;
          console.log(err.error.message);
          this.responseMessage = err.error.message;
        }
    )};
   
  }
}
