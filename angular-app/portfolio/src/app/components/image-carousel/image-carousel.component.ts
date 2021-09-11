import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.sass']
})
export class ImageCarouselComponent implements OnInit {
  @Input() carouselId = "";

  @Input() images:Array<Image> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onCarouselImageClicked(src:string){
    // Open up a bigger version of this but the same state.
  }
}
