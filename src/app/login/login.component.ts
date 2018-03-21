import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    input.ng-invalid{
      border: 3px solid red;
    }
    input.ng-valid{
      border: 3px solid green;
    }`
  ],
  providers: []
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  constructor(@Inject('auth') private service) { }

  ngOnInit() {
  }
  onSubmit(formValue) {
    console.log('auth result is: ' + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }

}
