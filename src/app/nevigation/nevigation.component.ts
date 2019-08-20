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
    this.show_dialog = !this.show_dialog;
    document.getElementById('divshow2').style.display = 'block';
    this.show_dialog = !this.show_dialog;

    // CHANGE THE TEXT OF THE BUTTON.
    if(this.show_dialog)
      this.button_name = "Hide Login Form!";
    else
      this.button_name = "Show Login Form!";
  }

  signOut(): void {
    this.authService.signOut();
  }
}
