import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { NewpostComponent } from 'src/app/components/newpost/newpost.component';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  constructor(public dialog: MatDialog) {}
  /** USAR DIALOG DE ANGULAR MATERIAL
   * El boton ejecuta openmodal y abre al componente importado que contiene el dialog
   */
  openModaldialog() {
    const dialogRef = this.dialog.open(NewpostComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Resultado del diálogo: ${result}`);
    });
  }
}
