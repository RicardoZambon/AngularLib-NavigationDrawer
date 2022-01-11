import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'zambon-lib-login-input',
    host: { '[class]' : 'themeName' },
    templateUrl: './login-input.component.html',
    styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements OnInit {

    @Input() formGroup!: FormGroup;

    @Input() controlName!: string;

    @Input() type: string = "text";
    @Input() icon: string = '';
    @Input() placeholder: string = '';
    @Input() themeName?: string;

    @Input() isInvalid: boolean = false;

    @HostBinding('attr.autofocus') @Input() autofocus: boolean = false;


    constructor() { }

    ngOnInit(): void {
    }
}