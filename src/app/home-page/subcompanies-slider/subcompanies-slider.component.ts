import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-subcompanies-slider',
  templateUrl: './subcompanies-slider.component.html',
  styleUrls: ['./subcompanies-slider.component.scss']
})
export class SubcompaniesSliderComponent implements OnInit{

  // Write output emitter
  @Output() sliderEvent: EventEmitter<any> = new EventEmitter<any>();
  companies = [
    { name: 'Namrushi Industries',
      logo: './assets/numrushi_logo.jpg'},
    { name: 'Rekhraj Writing',
      logo: './assets/rekhraj_writing_logo.jpg'},
    { name: 'Rekhraj Ventures',
      logo: './assets/rekhraj_ventures_logo.jpg'},
    { name: 'Krishnai Mobility',
      logo: 'https://via.placeholder.com/600.png/021/fff'}
  ];
  sliderConfig = {
    slidesToShow: 4,  // Adjust the number of slides to show
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  // Access the SlickCarouselComponent to set settings
  constructor() {}
  ngOnInit(): void {}


  emitEvent($event:any) {
    console.log($event);
    this.sliderEvent.emit($event);
  }
}
