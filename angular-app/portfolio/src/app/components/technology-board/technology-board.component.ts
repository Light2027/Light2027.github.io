import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology';

@Component({
  selector: 'app-technology-board',
  templateUrl: './technology-board.component.html',
  styleUrls: ['./technology-board.component.sass']
})
export class TechnologyBoardComponent implements OnInit {
  @Input() technologies:Array<Technology> = [];
  @Input() rowItemCount:number = 3;

  constructor() { }

  ngOnInit(): void {
    if(this.rowItemCount < 1)
      throw new Error("Row Item Count cannot be less than 1.");
  }
}
