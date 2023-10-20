import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getFirestore, updateDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, uploadBytes,Storage } from '@angular/fire/storage';
import { HomePage } from 'src/app/home/home.page';
import { AuthService } from 'src/app/services/auth.service';
import { FotosService } from 'src/app/services/fotos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feas',
  templateUrl: './feas.page.html',
  styleUrls: ['./feas.page.scss'],
})
export class FeasPage implements OnInit {

  ultimoid: string= "-2";
  constructor(private userService: AuthService, private storage: Storage, private firestore: Firestore, private fotos: FotosService) {
   }
  public imagenes: any[] = [];
  public indexes : any[]= [];
  public likes: any[] = [];
  public likImg: any[]=[];
  ngOnInit() {
    this.fotos.load().then(() => {
      this.Fotos= this.fotos.Fotos;
    });
    this.ConseguirLikes()
    this.getImagenes();
    console.log(HomePage.check);
  }

  // nuevaImagen: string= "../../assets/logo.png";
  async newImage(event: any) {
    this.conseguirUltimoId();

    const file= event.target.files[0];
    const path= "imagenes" ;
    const nombre= "imagenPrueba" + "-" +this.userService.retornarUsuario() +"-"+ new Date();
    this.upload(file, path, nombre);
    // console.log(file);
  }
 
  upload(file: any, path: string , nombre :string){
    const filePath= path + "/"+ nombre ;
     const reffile= ref(this.storage,filePath);
     console.log(file);
    uploadBytes(reffile, file).then(async img =>{
      const test= ref(this.storage,'imagenes/'+nombre);
      const imgf= await getDownloadURL(test);
     
      this.guardarInfo(imgf, nombre);
      this.getImagenes();
    }).catch(err => console.log(err)); 
    
}

mostrar(f :any){
  const x= this.imagenes.length-1 -f;
  // this.ConseguirLikes();
  if(!this.VerificarLikes(x)){
    console.log("ponele");
      
      const placeref= collection(this.firestore, "indicesFeas");
      collectionData(placeref).subscribe(data =>{
          const s :any[]= [];
          data.forEach(data =>{
            s.push(data)
          });
          s.forEach(data =>{ 
            if(data['id']=== x.toString()){
              const db= getFirestore();
              const docref= doc(db, "infoImagenesFeas", data['idCollecion'] );
              const dat={
                likes:this.likes[f] +1
              }
              updateDoc(docref, dat);

              this.GuardarLikes(x)
            } 
          });
          
          this.getImagenes();

      });
  }else{
    Swal.fire({
      text: 'Ya le diste like a esta foto!',
      heightAuto: false
    })
  }
}

GuardarLikes( id: number){
  console.log(HomePage.check)
  if(HomePage.check){
  if(!this.VerificarLikes(id)){
    if(this.userService.retornarUsuario()!='null'){ 
      console.log('entre sin querer')
      const datos={
        id: id,
        usuario: this.userService.retornarUsuario()
      }
      const placeRef = collection(this.firestore,"likesImagenesFeas");
      addDoc(placeRef, datos);
  }
  }
}
}

VerificarLikes( id: number){
  if(HomePage.check){

  for(const doc of this.likImg){
    if(doc['id']==id && doc['usuario']== this.userService.retornarUsuario()){
      return true;
    }
  }
}
  return false;

}

ConseguirLikes(){
  const placeRef= collection(this.firestore, 'likesImagenesFeas');
  const retorno = collectionData(placeRef);
  retorno.subscribe(data =>{
    this.likImg=[]
    for( const doc of data){
      this.likImg.push(doc);
    }
  })
}

 getImagenes() {
    const placeRef= collection(this.firestore, 'infoImagenesFeas');
    const retorno = collectionData(placeRef);
    retorno.subscribe(data =>
    {
    this.imagenes = [];
    this.indexes=[];
    this.likes=[];
    for(const x of data){
      this.imagenes.push(x);
      this.indexes.push(x['id']);
      }
     this.imagenes.sort((a,b)=> b['id']-a['id'])
    this.indexes.sort((a,b) => b-a);
    this.likes= this.imagenes.map(x => x['likes']);
      });

  }


  async guardarInfo(url : string, nombre : string){
     
    const usuario = this.userService.retornarUsuario();
    let[nom,rest] =["",""]
    if (usuario) {
       [nom, rest] = usuario.split('@');
    } 
      this.conseguirUltimoId().then(async data =>{
      const placeRef = collection(this.firestore,"infoImagenesFeas")
      const id= parseInt(this.ultimoid) +1 ;
      const Data= {
        url: url,
        fecha: new Date().toString(),
        likes: 0,
        usuario: this.userService.retornarUsuario(),
        id: id,
        nombre: nom +"-" +id.toString()
      }
      addDoc(placeRef, Data).then(data =>{
        const db= collection(this.firestore,"indicesFeas");
        const x={
          id:Data.id.toString(),
          idCollecion: data.id.toString()
        }
        addDoc(db,x);
      });
      await this.actualizarUltimoId(id.toString());
     })
  }

  private async actualizarUltimoId(id:string){
     const db= getFirestore();
     const docref= doc(db, "ultimoIdFeas", "kdOmyI67tldqLGuUidpE");
     console.log(id);
     const data={
      id: id
     }
     updateDoc(docref,data).then(docf =>{
      // console.log("ok");
     })
  }
  public Fotos: any[]= [];

  async pruebaFoto(){
    await this.fotos.nuevaFoto();
    console.log(this.fotos.Fotos);
    const path= "imagenes" ;
    const nombre= "imagenPrueba" + "-" +this.userService.retornarUsuario() +"-"+ new Date();
     await this.conseguirUltimoId().then(async () =>
    {const Data= {
      url: this.fotos.Fotos[0].base64,
      fecha: new Date().toString(),
      likes: 0,
      usuario: this.userService.retornarUsuario(),
    
      id: parseInt(this.ultimoid)+100,
      nombre: nombre
    }
    this.imagenes.push(Data);
    console.log(this.imagenes)
    this.imagenes.sort((a,b)=> b['id']-a['id'])
    console.log(this.imagenes)})
  }

  async conseguirUltimoId(){
    const placeRef= collection(this.firestore, 'ultimoIdFeas');
    const retorno = collectionData(placeRef)
    retorno.subscribe(data =>{
        for (const x in data){
            this.ultimoid= data[x]['id'];         
        }
    });
  }

}
