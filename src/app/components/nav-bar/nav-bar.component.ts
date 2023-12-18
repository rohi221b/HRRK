import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  companyName: any = 'HRRK Group of companies';
  logo: any = './assets/hrrk_logo.jpg';
  constructor(private sharedService: SharedService,
              private router: Router) {}

  ngOnInit(): void {
    this.sharedService.getEventEmitter().subscribe((data: any) => {
      if (data.name === 'Home' || data.name === 'About Us') {
        // Set default values for Home and About Us
        this.companyName = 'HRRK Group of industries';
        this.logo = './assets/hrrk_logo.jpg';
      } else {
        this.companyName = data.name;
        this.logo = data.logo;
        this.router.navigate([this.getLinkObjectByLabel(data.name).url]);
      }
    });
  }

  navLinks = [
    { name: 'Home', url: '/' },
    { name: 'Namrushi Industries', url: '/numrushi-industries', img: './assets/numrushi_logo.jpg' },
    { name: 'Rekhraj Writing', url: '/rekhraj-writing', img: './assets/rekhraj_writing_logo.jpg' },
    { name: 'Rekhraj Ventures', url: '/rekhraj-ventures', img: './assets/rekhraj_ventures_logo.jpg' },
    { name: 'Krishnai Mobility', url: '/krishnai-mobility', img: 'https://via.placeholder.com/600.png/021/fff' },
    { name: 'About Us', url: '/about-us' },
  ];

  navigate(link: any): void {
    const linkObject = this.getLinkObjectByLabel(link.name);
    this.sharedService.emitEvent({ name: linkObject.name, logo: linkObject.img });
  }

  getLinkObjectByLabel(label: string): any {
    return this.navLinks.find(link => link.name === label);
  }



}
