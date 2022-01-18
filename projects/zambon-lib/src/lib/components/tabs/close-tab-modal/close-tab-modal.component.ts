import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';

import { Tab } from '../../../models/tab';

@Component({
    selector: 'zambon-lib-close-tab-modal',
    templateUrl: './close-tab-modal.component.html'
})
export class CloseTabModalComponent implements OnInit {

    @Input() title!: string;
    @Input() message!: string;
    @Input() cancelLabel!: string;
    @Input() confirmLabel!: string;

    @ViewChild('modal') modalElement!: ElementRef<HTMLDivElement>;
    modal!: Modal;
    tab!: Tab;

    @Output() close = new EventEmitter<Tab>();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.modal = new Modal(this.modalElement.nativeElement);
    }


    show(tab: Tab): void {
        this.tab = tab;
        this.modal.show();
    }

    confirmClick(): void {
        this.close.emit(this.tab);
    }
}