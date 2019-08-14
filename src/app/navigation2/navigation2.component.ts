import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.component.html',
  styleUrls: ['./navigation2.component.css']
})
export class Navigation2Component implements OnInit {

  public show_dialog : boolean = false;
  public button_name : any = 'Show Login Form!';
  constructor() { }

  ngOnInit() {
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
