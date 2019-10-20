import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInput: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.loginInput = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  onLogin(){
    this.userService.loginUser(this.loginInput.value).subscribe(
      response => {
        localStorage.setItem('token', response['token']);
        //this.global.me = response['user'];
        // Una vez comprobado el login, navega hasta home
        this.router.navigate(['/form']);
    },
    error => {
      console.log('error', error);
      alert('Credenciales invalidas');
    }
    );


  }

}
