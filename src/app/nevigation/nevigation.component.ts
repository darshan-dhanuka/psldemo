import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';		   
@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent implements OnInit {
  public show_dialog : boolean = false;
  public show_reg : boolean = false;
  public button_name : any = 'Show Login Form!';
  user: SocialUser;
  details: UserDetails;
  constructor(public auth: AuthenticationService, private authService: AuthService) {}

  ngOnInit() {
    /*this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )*/
	this.authService.authState.subscribe((user) => {
      this.user = user;
      //console.log(user);
    });
  }

  toggle() {
    document.getElementById('divshow2').style.display = 'block';
  }

  togglereg() {
    document.getElementById('divreg').style.display = 'block';
  }
  
  signOut(): void {
    this.authService.signOut();
  }
}
