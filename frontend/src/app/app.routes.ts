import { RouterModule, Routes} from '@angular/router';

import { FormComponent } from './components/form/form.component';
import { VistaComponent } from './components/vista/vista.component';
import { BodyComponent } from './components/body/body.component';
import { LoginComponent } from './components/login/login.component';



// Aqui van todas las rutas de las paginas internas que se pueden visitar
const APP_ROUTES: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'form', component: FormComponent},
    { path: 'vista/:id', component: VistaComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'login'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
