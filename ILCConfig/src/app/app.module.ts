import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MDBBootstrapModule} from "angular-bootstrap-md";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ILCConfigComponent } from './components/ilcconfig/ilcconfig.component';
import { PairwiseComponent } from './components/pairwise/pairwise.component';
import { CriteriaConfigComponent } from './components/criteria-config/criteria-config.component';
import { CurtailmentConfigComponent } from './components/curtailment-config/curtailment-config.component';
import { HomeComponent } from './components/home/home.component';

import { ILCconfigService} from './services/ILCConfigService/ilcconfig.service';
import { PairwiseService} from './services/pairwise/pairwise.service';
import { ClusterService} from './services/cluster/cluster.service';
import { ClusterComponent } from './components/cluster/cluster.component';

@NgModule({
  declarations: [
    AppComponent,
    ILCConfigComponent,
    PairwiseComponent,
    CriteriaConfigComponent,
    CurtailmentConfigComponent,
    HomeComponent,
    ClusterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    ILCconfigService,
    PairwiseService,
    ClusterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
