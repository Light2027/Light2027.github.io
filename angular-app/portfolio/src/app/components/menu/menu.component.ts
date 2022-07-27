import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization-service.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public language : string = "en";

  constructor(public ls : LocalizationService) { }

  ngOnInit(): void {
  }

  public onLanguageChanged(event : any){
    this.language = event.target.value;
    this.ls.setLanguage(this.language);
  }
}
