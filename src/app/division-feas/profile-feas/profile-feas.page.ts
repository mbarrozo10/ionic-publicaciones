import { Component, OnInit } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-feas',
  templateUrl: './profile-feas.page.html',
  styleUrls: ['./profile-feas.page.scss'],
})
export class ProfileFeasPage implements OnInit {

  public imagenes: any[] = [];

  constructor( private firestore: Firestore, private userService: AuthService) {
    // this.getImagenes();
   }

  ngOnInit() {
      this.getImagenes();
  }

  getImagenes() {
    const usuario = this.userService.retornarUsuario();
    const placeRef= collection(this.firestore, 'infoImagenesFeas');
    const retorno = collectionData(placeRef);
    retorno.subscribe(data =>
    {   
    this.imagenes = [];
    console.log(data)
      console.log(usuario);
    for(const x of data){
      if(x['usuario']=== usuario){
        this.imagenes.push(x);
      }
      }
       });

  }
}
