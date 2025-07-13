import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/Components/not-found/not-found.component';
import { LoginComponent } from './auth/Components/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent },
    {path: '**', component: NotFoundComponent}
];
