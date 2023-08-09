import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { DetailComponent } from './Pages/detail/detail.component';
import { HeaderComponent } from './Components/header/header.component';
import { CardComponent } from './Components/card/card.component';
import { ErrorComponent } from './Pages/error/error.component';
import { CompoundEditModalComponent } from './Components/compound-edit-modal/compound-edit-modal.component';
import { CompoundCreateModalComponent } from './Components/compound-create-modal/compound-create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    CardComponent,
    ErrorComponent,
    CompoundEditModalComponent,
    CompoundCreateModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
