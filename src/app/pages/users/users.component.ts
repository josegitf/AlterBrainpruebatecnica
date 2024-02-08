import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  Iduser:any
  User={
    name:"NO ENCONTRADO",
    email:"NO ENCONTRADO",
    phone:""
  }
  constructor(
    public userService:UsersService,
    private toastr: ToastrService

  ){
    
  }
  ngOnInit() {
    // Obtener los datos de la publicación del servicio al inicializar el componente
    this.Iduser = this.userService.Iduser;
  
  }
}
