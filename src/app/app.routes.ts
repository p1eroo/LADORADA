import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthFormComponent } from './pages/login/auth-form.component';  
import { ShopComponent } from './pages/shop/shop.component';
import { TestComponent } from './pages/test/test.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopPagoComponent } from './pages/shoppago/shop-pago.component';
import { NewacountFormComponent } from './pages/newacount/newacount.component';
 


export const routes: Routes = [
    {path: "aboutus", component: AboutusComponent},
    {path: "products", component: ProductsComponent},
    {path: "contact", component: ContactComponent},
    {path: "shop", component: ShopComponent},
    { path: 'login', component: AuthFormComponent },
    {path:'test', component: TestComponent}, 
    {path:'checkout', component: CheckoutComponent},
    {path:'shoppago', component: ShopPagoComponent},
    {path:'newacount', component: NewacountFormComponent}, // Cambia a AuthFormComponent para la nueva cuenta
    {path:"", redirectTo:"login", pathMatch:"full"}
]; 

 