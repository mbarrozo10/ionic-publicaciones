import { Injectable } from '@angular/core';
// import { getStorage, FirebaseStorage   } from "firebase/storage";
import {Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
// import { Firestore, doc, } from "firebase/firestore";
import { DatosI } from '../models/DatosI';
import { Firestore, collection, collectionData, getDocs } from '@angular/fire/firestore';
import Swal from 'sweetalert2';
import { HomePage } from '../home/home.page';
@Injectable({
  providedIn: 'root'
})
export class FirestorageService {
  public datos: DatosI[] = [];
  public datosFeas: DatosI[] = [];

//   imagenes : string[] = [];
  constructor( private firestore: Firestore) { 
    this.TraerEstadisticas();
    this.TraerEstadisticasFeas();
  }

  TraerEstadisticas(){
  const placeRef= collection(this.firestore, 'infoImagenes');
    const retorno = collectionData(placeRef);
    retorno.subscribe(data =>
    {
      this.datos = [];
    for(const x of data){
      const dato : DatosI = {
        name: x['nombre'],
        value: x['likes'],
        file: x['url']
     }
     this.datos.push(dato);
    }
     console.log(this.datos);
});
  }
TraerEstadisticasFeas(){
  const placeRef= collection(this.firestore, 'infoImagenesFeas');
    const retorno = collectionData(placeRef);
    retorno.subscribe(data =>
    {
      this.datosFeas = [];
    for(const x of data){
      const dato : DatosI = {
        name: x['nombre'],
        value: x['likes'],
        file: x['url']
     }
     this.datosFeas.push(dato);
    }
     console.log(this.datosFeas);
});
}


// async traerImagen(id: string, bd: string){
//   console.log(HomePage.check);
//       if(HomePage.check){
//      const placeref= collection(this.firestore, bd);
//       let imagen: string="";
//   collectionData(placeref).subscribe(data =>{
//     console.log(data);
//       data.forEach(data =>{
//        if(data['id']=== parseInt(id)){
        
//           imagen= data['url'];
//        }
//        console.log(imagen);
//        return imagen;
//       });
//     return "";
//     })
//     return "";
//   }
//   return "";
//     }    

async traerImagen(id: string, bd: string) {
  if (HomePage.check) {
    const placeref = collection(this.firestore, bd);
    
    try {
      const data = await getDocs(placeref);
      
      for (const doc of data.docs) {
        const data = doc.data();
        
        if (data['id'] === parseInt(id)) {
          return data['url'];
        }
      }
 
    } catch (error) {
      console.error('Error al consultar Firestore:', error);
      // Puedes manejar el error aquí si es necesario.
    }
  }

  return '';
}
// //   upload(file: any, path: string , nombre :string){
//     const filePath= path + "/"+ nombre ;
//      const reffile= ref(this.storage,filePath);
//     uploadBytes(reffile, file).then(img =>{
//       this.getImagenes();
//     }).catch(err => console.log(err)); 
    
// }

// async getImagenes(): Promise<string[]> {
//     const imageref= ref(this.storage, 'imagenes');
//     try {
//       const img = await listAll(imageref);
//       this.imagenes = [];
//       for (const imagen of img.items) {
//         const url: string = await getDownloadURL(imagen);
//         this.imagenes.push(url);
//         console.log(this.imagenes);
//       }
//       return this.imagenes;
//     } catch (err) {
//       console.error(err);
//       return [];
//     }
//   }

}




// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// import {Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';


// @Component({
//   selector: 'app-lindas',
//   templateUrl: './lindas.page.html',
//   styleUrls: ['./lindas.page.scss'],
// })
// export class LindasPage implements OnInit {

//   constructor(private userService: AuthService, private storage: Storage) {
//      this.getImagenes();
//    }
//   public imagenes: string[] = [];
//   ngOnInit() {
    
//   }

//   // nuevaImagen: string= "../../assets/logo.png";
//   async newImage(event: any) {
//     const file= event.target.files[0];
//     const path= "imagenes" ;
//     const nombre= "imagenPrueba" + "-" +this.userService.retornarUsuario() +"-"+ new Date();
//     this.upload(file, path, nombre);

//   }
 
//   upload(file: any, path: string , nombre :string){
//     const filePath= path + "/"+ nombre ;
//      const reffile= ref(this.storage,filePath);
//     uploadBytes(reffile, file).then(img =>{
//       console.log(filePath);
//       this.getImagenes();
//     }).catch(err => console.log(err)); 
    
// }

//  getImagenes() {
//     const imageref= ref(this.storage, 'imagenes');
//        listAll(imageref).then(async img =>{
//         this.imagenes = [];
//       for (const imagen of img.items) {
//         const url = await getDownloadURL(imagen);
//         this.imagenes.push(url);
//         console.log(this.imagenes);
//       }
//        }).catch(err => { console.log(err)});
//   }
// }
