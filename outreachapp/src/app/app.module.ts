import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routing } from './app.routing';

import 'hammerjs';

import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, 
  MatTableModule,  MatToolbarModule, MatMenuModule,MatIconModule, 
  MatProgressSpinnerModule,
  MatDividerModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatStepperModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatSortModule,
  MatRadioModule,
  MatSlideToggle,
  MatSlideToggleModule,
  MatTabsModule,
  MatAutocompleteModule
} from '@angular/material';

import { RegistrationComponent } from './registration/registration.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SigninComponent } from './user/signin/signin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserService } from 'src/app/shared/user.service';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AuthInterceptor } from 'src/app/auth/auth.interspector';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { CompareControlValidatorDirective } from './shared/compare-control-validator.directive';
import { MessageComponent } from './message/message.component';
import { ControlFirstCharDirective } from './shared/check-first-char.directive';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { EventService } from './shared/event.service';
import { EventListComponent } from './event-list/event-list.component';
import { VolRegComponent } from './vol-reg/vol-reg.component';
import { CreateBulkEventComponent } from './event/create-bulk-event/create-bulk-event.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    UserComponent,
    SignUpComponent,
    UserComponent,
    SigninComponent,
    UserprofileComponent,
    UserListComponent,
    UpdateUserComponent,
    CompareControlValidatorDirective,
    ControlFirstCharDirective,
    MessageComponent,
    EventComponent,
    CreateEventComponent,
    EditEventComponent,
    EventListComponent,
    VolRegComponent,
    CreateBulkEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, 
    MatTableModule,  MatToolbarModule, MatMenuModule,MatIconModule, 
    MatProgressSpinnerModule,MatDividerModule,MatFormFieldModule ,
    MatProgressBarModule, MatStepperModule ,MatDatepickerModule,
    MatNativeDateModule, MatPaginatorModule, MatRadioModule,
    HttpClientModule, MatSortModule,  MatSlideToggleModule,
    MatTabsModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule,
    routing
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
              useClass: AuthInterceptor,
              multi: true
              }, UserService, EventService,  AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
