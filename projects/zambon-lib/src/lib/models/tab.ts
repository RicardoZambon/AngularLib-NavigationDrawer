import { IBaseView } from '../interfaces/ibase-view';
import { EventEmitter } from '@angular/core';

export class Tab {
    view!: IBaseView;
    url!: string;
    defaultTitle?: string;

    useScroll: boolean = true;
    translateTitle: boolean = false;
    
    x!: number;
    width!: number;

    changedValues = false;

    updatedPosition = new EventEmitter();

    updatePosition() {
        setTimeout(() => {
            this.updatedPosition.emit();
        }, 10);
    }
}