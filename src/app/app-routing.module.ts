import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocalizeRouterModule } from './localize-router/localize-router.module';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { LocalizeParser, ManualParserLoader } from './localize-router/localize-router.parser';
import { LocalizeRouterSettings } from './localize-router/localize-router.config';

const routes = [
  { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings) =>
          new ManualParserLoader(translate, location, settings, ['en', 'de'], 'ROUTES'),
        deps: [TranslateService, Location, LocalizeRouterSettings]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule { }
