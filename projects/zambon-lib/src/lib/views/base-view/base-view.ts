import { AfterViewInit, Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBaseView } from '../../interfaces/ibase-view';
import { TabService } from '../../services/tab.service';


@Component({
    template: ''
})
export abstract class BaseView implements AfterViewInit, IBaseView {
    currentUrl!: string;
    
    title?: string;
    titleUpdated: EventEmitter<void> = new EventEmitter<void>();

    get formDisabled(): boolean { return false };

    constructor(
        protected tabService: TabService,
        protected route: ActivatedRoute
    ) {
        this.currentUrl = this.route.pathFromRoot.map(r => r.snapshot.url).filter(f => !!f[0]).map(([f]) => f.path).join('/');
    }

    async ngAfterViewInit(): Promise<void> {
        this.tabService.openView(this, this.currentUrl);

        await this.initTab();
    }

    async initTab(): Promise<void> {
        await this.refresh();

        if (this.title) {
            this.titleUpdated.emit();
        }
    }

    async refresh(): Promise<void> {

    }
}