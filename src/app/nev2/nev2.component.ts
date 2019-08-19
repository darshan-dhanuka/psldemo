import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
@Component({
  selector: 'app-nev2',
  templateUrl: './nev2.component.html',
  styleUrls: ['./nev2.component.css']
})
export class Nev2Component implements OnInit {

  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';
  details: UserDetails
  constructor(public auth: AuthenticationService) {}

  ngOnInit() {
    /*this.auth.profile().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )*/
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



}
