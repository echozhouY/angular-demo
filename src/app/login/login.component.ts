import {
  Component,
  Inject,
  trigger,
  state,
  style,
  transition,
  animate,
  OnDestroy
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Auth, Image } from '../domain/entities';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class LoginComponent implements OnDestroy {

  username = '';
  password = '';
  auth: Auth;
  slides: Image[] = [];
  photo = '/assets/image/login_default_bg.jpg';
  subscription: Subscription;
  loginBtnState: string = 'inactive';

  constructor(
    @Inject('auth') private authService,
    @Inject('bing') private bingService,
    public dialog: MatDialog,
    private router: Router) {
    this.bingService.getImageUrl()
      .subscribe((images: Image[]) => {
        this.slides = [...images];
        this.rotateImages(this.slides);
      });
  }
  onSubmit(){
    console.log('hello', this.username, this.password);
    // this.subscription = this.authService
    //   .loginWithCredentials(this.username, this.password)
    //   .subscribe(auth => {
    //     debugger
    //     this.auth = Object.assign({}, auth);
    //     if(!auth.hasError){
    //       this.router.navigate(['todo']);
    //     }
    //   });
    let isLogined = this.authService
      .loginWithCredentials(this.username, this.password);
    if (!isLogined) {
      this.openDialog();
    }
  }
  ngOnDestroy(){
    if(this.subscription !== undefined)
      this.subscription.unsubscribe();
  }
  rotateImages(arr: Image[]){
    const length = arr.length
    let i = 0;
    setInterval(() => {
      i = (i + 1) % length;
      this.photo = this.slides[i].contentUrl;
    }, 40000);
  }
  // toggleLoginState(state: boolean){
  //   this.loginBtnState = state ? 'active' : 'inactive';
  // },
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      },
      height: '200px'
    });
  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
