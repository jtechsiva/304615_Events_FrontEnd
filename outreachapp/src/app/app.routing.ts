import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SigninComponent } from 'src/app/user/signin/signin.component';
import { UserprofileComponent } from 'src/app/userprofile/userprofile.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { UserListComponent } from 'src/app/user-list/user-list.component';
import { UpdateUserComponent } from 'src/app/user/update-user/update-user.component';
import { MessageComponent } from './message/message.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { EventComponent } from './event/event.component';
import { EditEventComponent } from './event/edit-event/edit-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { VolRegComponent } from './vol-reg/vol-reg.component';
import { CreateBulkEventComponent } from './event/create-bulk-event/create-bulk-event.component';

const routes: Routes = [
    { path: 'signup', component: UserComponent, data: {title: 'User'} ,
     children: [{ path: '', component: SignUpComponent, data: {title: 'Sign Up'} }]},
     { path: 'signin', component: UserComponent, data: {title: 'User'} ,
     children: [{ path: '', component: SigninComponent, data: {title: 'Sign In'} }]},
     { path: 'userprofile/:id', component: UserprofileComponent, data: {title: 'User Profile'} },
     { path: 'registration', component: RegistrationComponent, data: {title: 'Registration'} },
     { path: 'updateuser/:id', component: UpdateUserComponent, data: {title: 'Update User'} },
     { path: 'userlist', component: UserListComponent, data: {title: 'User List'} , canActivate: [AuthGuard] },
     { path: 'message/:message', component: MessageComponent, data: {title: 'Message'} },
     { path: '', component: SigninComponent, pathMatch: 'full',data: {title: 'User'} },
     { path: 'createevent', component: EventComponent, data: {title: 'Create Event'} ,
     children: [{ path: '', component: CreateEventComponent, data: {title: 'Create Event'} }]},
     { path: 'editevent/:id', component: EventComponent, data: {title: 'Edit Event'} ,
     children: [{ path: '', component: EditEventComponent, data: {title: 'Edit Event'} }]},
     { path: 'eventlist', component: EventListComponent, data: {title: 'Event List'} },
     { path: 'createbulkevent', component: CreateBulkEventComponent, data: {title: 'Create bulk events'} },
     { path: 'volreg', component: VolRegComponent, data: {title: 'Volunteering Registration'} }
    ];

// { path: 'userprofile/:id', component: UserprofileComponent, data: {title: 'User Profile'}, canActivate: [AuthGuard] },
     
export const routing = RouterModule.forRoot(routes);