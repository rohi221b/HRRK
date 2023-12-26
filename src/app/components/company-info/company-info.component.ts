import { Component } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent {
  companyName = 'Example Company';
  vision = 'To be a leader in our industry, providing innovative solutions.';
  mission = 'Our mission is to deliver high-quality products and services to our customers with a commitment to excellence and sustainability.';
  brief = 'Example Company is a global leader in delivering cutting-edge solutions for [industry]. With a focus on innovation and customer satisfaction, we strive to set new benchmarks in our industry.';

}
