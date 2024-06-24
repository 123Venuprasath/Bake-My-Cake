import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeCardComponent } from 'src/cake-card/cake-card.component';
import { CakeCartComponent } from 'src/cake-cart/cake-cart.component';
import { CakeListComponent } from 'src/cake-list/cake-list.component';
import { CakeRequestComponent } from 'src/cake-request/cake-request.component';
import { LoginComponent } from 'src/login/login.component';
import { NotFoundComponent } from 'src/not-found/not-found.component';
import { HeaderComponent } from 'src/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from 'src/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';






@NgModule({
  declarations: [
    AppComponent,
    CakeCardComponent,
    CakeCartComponent,  
    CakeListComponent,
    CakeRequestComponent,
    LoginComponent,
    NotFoundComponent,
    HeaderComponent,
    SearchComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
  
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
