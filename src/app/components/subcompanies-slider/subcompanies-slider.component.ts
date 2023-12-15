import { Component } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-subcompanies-slider',
  templateUrl: './subcompanies-slider.component.html',
  styleUrls: ['./subcompanies-slider.component.scss']
})
export class SubcompaniesSliderComponent {
  companies = [
    { name: 'Namrushi Industries' },
    { name: 'Rekhraj WTT' },
    { name: 'Rekhraj Ventures' },
    { name: 'Krishnai Mobility' }
  ];
  sliderConfig = {
    slidesToShow: 3,  // Adjust the number of slides to show
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  // Access the SlickCarouselComponent to set settings
  slickModal: SlickCarouselComponent | null = null;
  afterSlickInit(slickModal: SlickCarouselComponent) {
    this.slickModal = slickModal;
  }


}
