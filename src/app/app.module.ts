import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular Material Components
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Game List
import { SafariGateComponent } from './games/safari-gate/safari-gate.component';

@NgModule({
  declarations: [
    AppComponent,

    // Games List
    SafariGateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Angular Material Components
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
