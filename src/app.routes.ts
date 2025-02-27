import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { login } from './app/pages/login/login';
import { home } from './app/pages/home/home';
import { HomeLayout } from './app/pages/home/homelayout';
import { Integration } from './app/pages/integration/integration';
import { Usage } from './app/pages/usage/usage';
import { Schedule } from './app/pages/schedule/schedule';
import { Profile } from './app/pages/profile/profile';



export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            //{path:'home',loadChildren:()=>import(('./app/pages/home/home.routes'))},
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            
        ]
    },
    {
        path: 'homelayout',
        component: HomeLayout,
        children: [
         
            {path:'home',component:home},// Default redirection
            { path: 'usage', component: Usage },
            {path:'integration',component:Integration},
            {path:'schedule',component:Schedule},
            {path:'profile',component:Profile}
        ]
    },
    
    { path: 'landing', component: Landing },
    { path:'login',component:login},
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
    
];
