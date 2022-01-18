import { EventEmitter, QueryList } from '@angular/core';

export interface IBaseView {
    
    currentUrl: string;
    
    title?: string;
    titleUpdated: EventEmitter<void>;

    get formDisabled(): boolean;
    
    
    initTab(): Promise<void>

    refresh(): Promise<void>;
}