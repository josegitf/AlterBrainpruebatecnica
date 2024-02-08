import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostComponent } from './pages/post/post.component';
import { UsersComponent } from './pages/users/users.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'perfil', component: UsersComponent },
  { path: 'posts', component: PostComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
