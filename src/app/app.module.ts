import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ng2-tooltip-directive';
import {LayoutModule} from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignformComponent } from './views/signalisations/signform/signform.component';
import { SignlistComponent } from './views/signalisations/signlist/signlist.component';
import { HtlformComponent } from './views/hotline/htlform/htlform.component';
import { DatasetComponent } from './views/setting/dataset/dataset.component';
import { TestComponent } from './views/test/test.component';


import {MentionService} from "src/app/api/services/mention.service";

const appRoutes: Routes = [
  {path: 'test', component: TestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SignformComponent,
    HtlformComponent,
    SignlistComponent,
    DatasetComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TooltipModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()

  ],
  providers: [MentionService],

  bootstrap: [AppComponent]
})
export class AppModule { }
