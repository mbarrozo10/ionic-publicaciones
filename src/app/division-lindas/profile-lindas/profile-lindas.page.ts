import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-lindas',
  templateUrl: './profile-lindas.page.html',
  styleUrls: ['./profile-lindas.page.scss'],
})
export class ProfileLindasPage implements OnInit {
  public imagenes: any[] = [];

  constructor( private firestore: Firestore, private userService: AuthService) {
    // this.getImagenes();
   }

  ngOnInit() {
      this.getImagenes();
  }

  getImagenes() {
    const usuario = this.userService.retornarUsuario();
    const placeRef= collection(this.firestore, 'infoImagenes');
    const retorno = collectionData(placeRef);
    retorno.subscribe(data =>
    {   
    this.imagenes = [];

    for(const x of data){
      if(x['usuario']=== usuario){
        this.imagenes.push(x);
      }
      }
       });

  }

}
