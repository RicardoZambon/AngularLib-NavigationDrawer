import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MenuItem, NavigationDrawerComponent, TabService } from 'zambon-lib';

@Component({
  selector: 'storybook-tabs-container',
  template: `
    <div class="d-flex box">
        <zambon-lib-navigation-drawer #navigation
            [userName]="'Test'"
            [userDepartment]="'Test department'"
            [userImage]="null"
            [autoNavigate]="false"
            (navigated)="navigateItem($event)"
        >
        </zambon-lib-navigation-drawer>
        
        <div class="main d-flex flex-grow-1 flex-column">
            <div class="toolbar position-relative d-flex flex-shrink-0 p-2 align-items-center">
                <button type="button" class="btn btn-primary" (click)="toggleNavigation()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>

            <div class="container-fluid position-relative flex-grow-1 pt-3 pb-2">
                <zambon-lib-tab-container>
                    <router-outlet></router-outlet>
                </zambon-lib-tab-container>
            </div>
        </div>
    </div>
    `,
  styleUrls: [ './tabs-container-story.component.scss' ]
})
export default class TabsContainerStoryComponent implements AfterViewInit {
  @ViewChild('navigation') navigation!: NavigationDrawerComponent;
  
  constructor(private tabService: TabService) {
    
  }

  async ngAfterViewInit(): Promise<void> {
    const home = this.createMenuItem(1, 'home', 'Home page', '');

    const security = this.createMenuItem(2, 'user', 'Security');
    security.children.push(this.createMenuItem(3, '', 'Users', '1', security));
    security.children.push(this.createMenuItem(4, '', 'Roles', '2', security));
    security.children.push(this.createMenuItem(5, '', 'Actions', '3', security));
    
    const reports = this.createMenuItem(6, 'file-alt', 'Reports');
    reports.children.push(this.createMenuItem(7, '', 'Report A', '4', reports));
    reports.children.push(this.createMenuItem(8, '', 'Report B', '5', reports));
    reports.children.push(this.createMenuItem(9, '', 'Report C', '6', reports));
    
    this.navigation.menus = [
        home,
        security,
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

  navigateItem(menu: MenuItem): void {
    if (menu.url) {
        this.tabService.openUrl(menu.url, menu.label);
    }
  }
}