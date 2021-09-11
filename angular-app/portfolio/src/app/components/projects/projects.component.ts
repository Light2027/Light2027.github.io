import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ProjectInfo } from 'src/app/models/project-info';
import { Technology } from 'src/app/models/technology';
import { ProjectInfoService } from 'src/app/services/project-info-service.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {
  public projects:Array<ProjectInfo> = [];

  constructor(private projectInfoService:ProjectInfoService) { }

  ngOnInit(): void {
    this.projectInfoService.getProjectInfos().forEach(p => this.projects.push(p));
    // ##### For Styling ######
    /*
    for(let i = 0; i < 5; i++){
      this.projects.push(new ProjectInfo(`Test-${i}`, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed egestas vehicula tortor, nec efficitur nunc scelerisque sed. Duis hendrerit augue tincidunt nibh blandit dictum. Aenean vestibulum felis eget eros vulputate, at placerat tellus feugiat. Donec ac diam porttitor nulla efficitur laoreet a in mi. Integer in mi sit amet est interdum sodales quis vel nunc. Curabitur vestibulum aliquet orci, at pretium neque euismod vitae. Quisque arcu mauris, rhoncus et ultricies hendrerit, porta vel augue.  Vivamus a dui porta, vulputate dui ut, tincidunt ligula. Duis posuere porta dignissim. Praesent pulvinar lectus a tincidunt gravida. Maecenas ipsum ligula, accumsan at tincidunt eu, hendrerit vitae lorem. Nunc commodo orci a felis suscipit, at dignissim quam ullamcorper. Suspendisse est lorem, pulvinar eu congue vehicula, dapibus ut neque. Quisque nec ligula eleifend, maximus nibh vel, pellentesque lacus. Sed pretium justo vel dignissim semper. Aenean semper pulvinar est, eu eleifend leo semper in.  Curabitur vitae elit augue. Nullam blandit hendrerit quam, non ullamcorper arcu iaculis vel. Sed eu ligula sed lorem ullamcorper porta. Nunc iaculis volutpat dapibus. Donec semper tellus sit amet nibh feugiat, eget sodales eros ultrices. Sed quis enim eu massa ullamcorper pulvinar non sed ligula. Phasellus aliquam orci elit, a sodales nulla laoreet at. Ut tempus, ex vel tincidunt pharetra, nisl eros elementum nisl, in porttitor sapien nisl et turpis. Etiam accumsan dui sit amet ipsum luctus consequat. Nulla facilisi. Sed vel dignissim dolor, at tempor nibh. Nunc eleifend risus enim, a porttitor lacus congue in.", "www.google.com", [
        new Image("Image1", "https://www.enjpg.com/img/2020/1440p-9.jpg"),
        new Image("Image1", "https://wallpaper.dog/large/5456155.jpg"),
        new Image("Image1", "https://images.hdqwalls.com/download/biker-synthwave-vg-2560x1440.jpg"),
      ], [
        new Technology("Angular", new Image("Angular Logo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png")),
        new Technology("Angular", new Image("Angular Logo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png")),
        new Technology("Angular", new Image("Angular Logo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png")),
        new Technology("Angular", new Image("Angular Logo", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png")),
      ]));
    }
    */
  }
}
