import { Inject, InjectionToken, LOCALE_ID, ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateCacheModule, TranslateCacheSettings, TranslateCacheService } from 'ngx-translate-cache';


export const Languages = new InjectionToken<string[]>("languages");

@NgModule({
    imports: [
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateLoaderFactory,
                deps: [HttpClient]
            }
        }),
        TranslateCacheModule.forRoot({
            cacheService: {
                provide: TranslateCacheService,
                useFactory: translateCacheFactory,
                deps: [TranslateService, TranslateCacheSettings]
            },
            cacheMechanism: 'Cookie'
        })
    ],
    providers: [
        { provide: LOCALE_ID, deps: [TranslateService], useFactory: (ts: TranslateService) => ts.currentLang }
    ],
    exports: [TranslateModule]
})
export class I18nModule {

    constructor(@Inject(Languages) languages: string[], translate: TranslateService, translateCacheService: TranslateCacheService) {
        translateCacheService.init();
        
        translate.addLangs(languages);
        translate.setDefaultLang(languages[0]);

        const browserLang = translateCacheService.getCachedLanguage() || translate.getBrowserLang();
        translate.use(languages.includes(browserLang) ? browserLang : languages[0]);
    }

    static forRoot(languages?: string[]): ModuleWithProviders<I18nModule> {
        return {
            ngModule: I18nModule,
            providers: [ { provide: Languages, useValue: languages } ]
        }
    }
}

export function translateLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

export function translateCacheFactory(translateService: TranslateService, translateCacheSettings: TranslateCacheSettings) {
    return new TranslateCacheService(translateService, translateCacheSettings);
}