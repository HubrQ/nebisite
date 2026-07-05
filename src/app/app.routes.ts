import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Funstuff } from './pages/funstuff/funstuff';
import { Randominfo } from './pages/randominfo/randominfo';
import { Contact } from './pages/contact/contact/contact';
import { Gallery } from './pages/gallery/gallery/gallery';
import { Books } from './pages/books/books/books';
import { Personalcard } from './pages/personalcard/personalcard';



export const routes: Routes = [


    {
        path:"",
        redirectTo:"home",
        pathMatch:"full",
    },
    {
        path:"funstuff",
        component:Funstuff

    },
    {
        path:"randominfo",
        component:Randominfo


    },
    {
        path:"home",
        component:Home

    },
        {
        path:"gallery",
        component:Gallery

    },
        {
        path:"contact",
        component:Contact

    },
    {
        path:"books",
        component:Books

    },
    {
        path:"personalcard",
        component:Personalcard
    }



];
