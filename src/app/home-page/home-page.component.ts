import {Component} from '@angular/core';
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private sharedService: SharedService) {}

  sliderEventEmitter(event: any) {
    this.sharedService.emitEvent(event);
  }
}
