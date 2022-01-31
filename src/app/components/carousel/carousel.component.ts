import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  event_list = [
    
    {
      event:' Event 1',
      eventLocation:'Mumbai',
      eventDescription:'Mumbai is hub of startups',
      img: '../assets/img/cycling-tour-2022.png',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
    {
      event:' Event 2',
      eventLocation:'Barcelona',
      eventDescription:'Barcelona is another good city',
      img: '../assets/img/cycle1.jpg',
      eventStartDate: new Date(),
      eventEndingDate: new Date()
    },
  ]


  current_events =  this.event_list.filter( event => event)



  constructor() { }

  ngOnInit(): void {
  }

}
