import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
/**
 * importar la tabla y el paginador 
 */
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environment.local';

@Component({
  selector: 'app-listadopost',
  templateUrl: './listadopost.component.html',
  styleUrls: ['./listadopost.component.css']
})
export class ListadopostComponent {
    /**el paginator esta indefinido por que se genera un error al iniciarlo 
   * lo vemos despues en el constructor con la asignacion
   * al igual que dataSource, esta variable va almacenar la data del servicio para poder asignarla a nuestra
   * tabla posteriomente
  */
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: MatTableDataSource<any>;
  dataposts:any
  /**las columnas de la tabla, la immagen no se renderiza por que faltan algunas configuraciones en el back */
  columnsToDisplay = ['id', 'titulo','contenido','imagen'];
  apiUrl: string = environment.apiUrl;

  constructor(
    private postServicio: PostService
  ){
    this.paginator = {} as MatPaginator;
    this.dataSource = new MatTableDataSource<any>();
  }
  ngOnInit(): void {
    /**obtener la data cuando se inicie nuestro componente */
    this.getposts()
    /**creamos una suscripcion a updatepost para poder ejecutar la funcion desde el servicio
     * esto nos permitira actualizar la tabla
     */
    this.postServicio.postUpdated.subscribe((data: any[]) => {
      /**funcion que se ejecuta para actualizar */
      this.updateposts(data)
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getposts(){
    this.postServicio.getpublicaciones().subscribe({
      next:(data)=>{
        /**Almacenar los datos obtenido en mi variable del servicio */
        this.postServicio.setData(data); 
        this.dataSource = new MatTableDataSource<any>(data);
        this.dataSource.paginator = this.paginator;
      },
      error:(error)=>{
        console.error(error.error)
      }
    })
  }
  updateposts(data:any){
    this.dataSource = new MatTableDataSource<any>(data);
    this.dataSource.paginator = this.paginator;
  }
}
