import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

import { Tab } from '../../../models/tab';
import { CustomReuseStrategy } from '../../../routes/custom-reuse-strategy';
import { TabService } from '../../../services/tab.service';
import { CloseTabModalComponent } from '../close-tab-modal/close-tab-modal.component';

@Component({
    selector: 'zambon-lib-tab-container',
    templateUrl: './tab-container.component.html',
    styleUrls: ['./tab-container.component.scss'],
    host: { class: 'd-flex flex-column w-100 h-100' }
})
export class TabContainerComponent implements OnDestroy {
    
    @Input() modalTitle: string = 'TabContainer-CloseConfirmModal-Title';
    @Input() modalMessage: string = 'TabContainer-CloseConfirmModal-Message';
    @Input() modalCancelLabel: string = 'TabContainer-CloseConfirmModal-ButtonCancel';
    @Input() modalConfirmLabel: string = 'TabContainer-CloseConfirmModal-ButtonClose';

    @Input() tabLoadingMessage: string = 'TabItem-LoadingMessage';
    
    @ViewChild('closeModal') closeModal!: CloseTabModalComponent;

    public get activeTab(): Tab | null {
        return this.tabService.activeTab;
    }
    
    public get openTabs(): Array<Tab> {
        return this.tabService.openTabs;
    }
    public set openTabs(value: Array<Tab>) {
        this.tabService.openTabs = value;
    }

    subs = new Subscription();
        
    constructor(
        private routeReuse: RouteReuseStrategy,
        private tabService: TabService,
        private dragulaService: DragulaService
    ) {
        if (!this.dragulaService.find('TABS')) {
            this.dragulaService.createGroup("TABS", {
                direction: 'horizontal'
            });
        }

        this.subs.add(
            this.tabService.tabOpened.subscribe(url => {
                (<CustomReuseStrategy>this.routeReuse).storeNewRoute(url);
            })
        );

        this.subs.add(
            this.tabService.tabRedirected.subscribe(urls => {
                (<CustomReuseStrategy>this.routeReuse).redirectRoute(urls.oldUrl, urls.newUrl);
            })
        );

        this.subs.add(
            this.tabService.tabClosed.subscribe(url => {
                (<CustomReuseStrategy>this.routeReuse).removeRoute(url);
            })
        );

        this.subs.add(
            this.dragulaService.dragend("TABS")
                .subscribe(() => {
                    this.activeTab?.updatePosition();
                })
        );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }


    public setTabActive(tab: Tab | null): void {
        this.tabService.setTabActive(tab);
    }

    public closeTab(tab: Tab): void {
        if (tab.changedValues) {
            this.closeModal.show(tab);
        } else {
            this.tabService.closeTab(tab);
        }
    }

    public forceCloseTab(tab: Tab): void {
        this.tabService.closeTab(tab);
    }


    public getSelectedLeft(): number {
        return this.activeTab?.x ?? 0;
    }

    public getSelectedWidth(): number {
        return this.activeTab?.width ?? 0;
    }

    public activeTabUseScroll(): boolean {
        console.log((this.tabService.activeTab?.useScroll ?? false));
        return this.tabService.activeTab?.useScroll ?? false;
    }
}