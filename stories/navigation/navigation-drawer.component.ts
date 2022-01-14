import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { create } from 'domain';
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
    const home = this.createMenuItem(1, 'home', 'Home page', '');
    
    const reports = this.createMenuItem(2, 'file-alt', 'Reports');
    reports.children.push(this.createMenuItem(3, '', 'Report A', '3', reports));
    reports.children.push(this.createMenuItem(4, '', 'Report B', '4', reports));
    reports.children.push(this.createMenuItem(5, '', 'Report C', '5', reports));
    
    this.navigation.menus = [
        home,
        reports
    ];
  }


  toggleNavigation() {
    this.navigation.toggleState();
  }

  private createMenuItem(id: number, icon: string, label: string, url: string | undefined = undefined, parent: MenuItem | null = null) {
      const menuItem = new MenuItem();

      menuItem.id = id;
      menuItem.icon = icon;
      menuItem.label = label;
      menuItem.url = url;

      menuItem.parent = parent;

      return menuItem;
  }
}