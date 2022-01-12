import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MenuItem, NavigationDrawerComponent } from 'projects/zambon-lib/src/public-api';

@Component({
  selector: 'storybook-navigation-drawer',
  template: `
    <div class="d-flex box">
        <zambon-lib-navigation-drawer #navigation
            [userName]="'Test'"
            [userDepartment]="'Test department'"
            [userImage]="null"
        >
        </zambon-lib-navigation-drawer>
        
        <div class="main d-flex flex-grow-1 flex-column">
            <div class="toolbar position-relative d-flex flex-shrink-0 p-2 align-items-center">
                <button type="button" class="btn btn-primary" (click)="toggleNavigation()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="container-fluid position-relative flex-grow-1 pt-3 pb-2">
            </div>
        </div>
    </div>`,
  styleUrls: [ './navigation-drawer-story.component.scss' ]
})
export default class NavigationDrawerStoryComponent implements AfterViewInit {
  @ViewChild('navigation') navigation!: NavigationDrawerComponent;
  
  constructor() {
    
  }

  async ngAfterViewInit(): Promise<void> {
    const home = new MenuItem(); home.id = 1; home.icon = 'home'; home.label = 'Home page'; home.url = '';
    
    const menus = [
      home
    ];

    this.navigation.menus = menus;  
  }


  toggleNavigation() {
    this.navigation.toggleState();
  }
}
