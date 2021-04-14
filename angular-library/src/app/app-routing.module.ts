import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginButtonComponent } from './login-button/login-button.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: 'login',
    component: LoginButtonComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false , paramsInheritanceStrategy: 'always' , preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
