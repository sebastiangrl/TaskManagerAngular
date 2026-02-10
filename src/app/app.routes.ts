import { Routes } from '@angular/router';
import { Home } from './components/home/home';

// 📝 DIFERENCIA #18: Routing manual vs file-based
// En Next.js: /pages/index.tsx automáticamente es la ruta "/"
// En Angular: Debes configurar las rutas manualmente
export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Task Manager - Angular Learning'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
