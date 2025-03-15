import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfessorCrudComponent } from './pages/professor-crud/professor-crud.component';
import { AlunoCrudComponent } from './pages/aluno-crud/aluno-crud.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'professor', component: ProfessorCrudComponent, canActivate: [AuthGuard] },
    { path: 'aluno', component: AlunoCrudComponent, canActivate: [AuthGuard] },
    
];
