import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {AppState, reducers} from './state';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {PortfolioItemControlComponent} from './portfolio-item-control/portfolio-item-control.component';
import {PortfolioItemViewComponent} from './portfolio-item-view/portfolio-item-view.component';
import {SalesGroupViewComponent} from './sales-group-view/sales-group-view.component';
import {ItemViewComponent} from './item-view/item-view.component';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {SalesGroupEffects} from './state/sales-group/sales-group.effects';
import { SalesGroupTreeViewComponent } from './sales-group-tree-view/sales-group-tree-view.component';
import {TreeModule} from 'angular-tree-component';

export const APP_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>('app reducer');

@NgModule({
  declarations: [
    AppComponent,
    PortfolioItemControlComponent,
    PortfolioItemViewComponent,
    SalesGroupViewComponent,
    ItemViewComponent,
    SalesGroupTreeViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([AppEffects, SalesGroupEffects]),
    TreeModule.forRoot(),
  ],
  providers: [{
    provide: APP_REDUCER_TOKEN,
    useValue: reducers,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
