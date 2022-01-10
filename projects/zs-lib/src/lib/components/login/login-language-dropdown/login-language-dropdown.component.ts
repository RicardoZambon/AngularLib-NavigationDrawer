import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'zslib-login-language-dropdown',
  host: { '[class]' : 'themeName' },
  templateUrl: './login-language-dropdown.component.html',
  styleUrls: ['./login-language-dropdown.component.scss']
})
export class LoginLanguageDropdownComponent implements OnInit {

    @ViewChild('dropdown') dropdownElement!: ElementRef<HTMLButtonElement>;
    dropdown!: Dropdown;

    languages!: string[];

    @Input() title: string = 'SelectLanguage-Title';
    @Input() languagePrefix: string = 'SelectLanguage-';
    @Input() themeName?: string;

    constructor(public translate: TranslateService) {
        this.languages = this.translate.getLangs();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.dropdown = new Dropdown(this.dropdownElement.nativeElement);
    }

    dropdownClick(): void {
        this.dropdown.toggle();
    }

    itemClick(selectedLanguage: string): void {
        this.translate.use(selectedLanguage);
    }
}
