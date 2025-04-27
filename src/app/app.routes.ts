import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';


export const routes: Routes = [
    {path: "aboutus", component: AboutusComponent},
    {path: "products", component: ProductsComponent},
    {path: "contact", component: ContactComponent}
];
