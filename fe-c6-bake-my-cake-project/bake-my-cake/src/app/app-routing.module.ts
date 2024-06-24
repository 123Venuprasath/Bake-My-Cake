import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';
import { CakeListComponent } from 'src/cake-list/cake-list.component';
import { CakeRequestComponent } from 'src/cake-request/cake-request.component';
import { LoginComponent } from 'src/login/login.component';
import { NotFoundComponent } from 'src/not-found/not-found.component';
import { CanDeactivateGuard } from 'src/services/can-deactivate.guard';
import { CakeCartComponent } from 'src/cake-cart/cake-cart.component';





const routes: Routes = [

  { path: "", redirectTo: "/cake", pathMatch: "full" },
  { path: "cake/:id", component: CakeCartComponent, canDeactivate: [CanDeactivateGuard] },
  { path: "cake-requests", component: CakeRequestComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "cake", component: CakeListComponent },
  { path: "**", component: NotFoundComponent }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
