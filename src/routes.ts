import {Routes} from "@angular/router";
import { AppComponent } from "./app/app.component";
import { NewCustomerFormComponent } from "./app/new-customer-form/new-customer-form.component";
import {CustomersComponent} from "./app/customers/customers.component";

export const appRoutes: Routes = [
  {path: '', component: CustomersComponent},
  {path: 'customer/new',component: NewCustomerFormComponent},
  {path: 'customer/edit/:id',component: NewCustomerFormComponent},
  {path: '*', redirectTo: '/', pathMatch: 'full'}
]
