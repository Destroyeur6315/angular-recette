import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListeRecetteComponentComponent } from './liste-recette-component/liste-recette-component.component';
import { DetailRecetteComponentComponent } from './detail-recette-component/detail-recette-component.component';
import { filter } from 'rxjs';
import { ListeIngredientComponentComponent } from './liste-ingredient-component/liste-ingredient-component.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },
    {
        path: 'accueil',
        component: ListeRecetteComponentComponent
    },
    {
        path: 'detail-recette/:id',
        component: DetailRecetteComponentComponent
    },
    {
        path: 'ingredient',
        component: ListeIngredientComponentComponent,
        canActivate: [AuthGuard],
    }
];
