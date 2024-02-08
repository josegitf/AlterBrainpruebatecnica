import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/**MATERIAL */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

/**COMPONENTES */
import { UsersComponent } from './pages/users/users.component';

//
import { HttpClientModule } from '@angular/common/http';
import { ListadopostComponent } from './components/listadopost/listadopost.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { PostComponent } from './pages/post/post.component';
/**uso de formularios reactivos */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
/** libreria de alertas o notificaciones */
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListadopostComponent,
    NewpostComponent,
    PostComponent,
    NavbarComponent,
    PerfilComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-center',
    }),
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
