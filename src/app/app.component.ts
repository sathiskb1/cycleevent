import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  navbarOpen = false;
  

  title = 'event';

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  joinclick(event: any) { 
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
 }
}
