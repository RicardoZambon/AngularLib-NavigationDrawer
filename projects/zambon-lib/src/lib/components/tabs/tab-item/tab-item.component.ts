import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';

import { Tab } from '../../../models/tab';

@Component({
  selector: 'zambon-lib-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit {

    @Input() tab!: Tab;
    @Input() isActive!: boolean;
    @Input() loadingMessage!: string;

    @ViewChild('tabItem') tabItem!: ElementRef;

    @Output() navigated = new EventEmitter<Tab>();
    @Output() closed = new EventEmitter<Tab>();

    subs = new Subscription();

    public get hasTitle(): boolean {
        return this.tab?.view?.title !== undefined;
    }


    constructor() { }

    ngOnInit(): void {
        this.tab.updatedPosition.subscribe(() => {
            this.tab.width = this.tabItem.nativeElement.clientWidth;
            this.tab.x = this.tabItem.nativeElement.offsetLeft + 1;
        });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }


    itemClick(): void {
        this.navigated.emit(this.tab);
    }

    closeClick(): void {
        this.closed.emit(this.tab);
    }
}