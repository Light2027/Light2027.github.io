import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization-service.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  constructor(public ls : LocalizationService) { }

  ngOnInit(): void {
  }

}
