import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public static check: boolean = false;
  constructor(private authService: AuthService, private router: Router, private firestore : Firestore) {
    const placeref= collection(this.firestore, 'usuarios');
    
     const retorno= collectionData(placeref);
     retorno.subscribe(data =>
     {
      
      // const retorno= data.find(item => item['correo']===this.authService.retornarUsuario());
      for (const x of data){
        if(x['correo']=== this.authService.retornarUsuario() ){
          this.usuario= x['usuario'];
        }
      }
     })
   }
   
   usuario?:  any;
  ngOnInit() {
    HomePage.check=false;
  }
  accederLindas(){
    HomePage.check = true;
    this.router.navigateByUrl('/division-lindas/lindas',{replaceUrl:true});
  }

  accederFeas(){
    HomePage.check = true;
    this.router.navigateByUrl('/division-feas/feas',{replaceUrl:true});
  }

  async logout(){
   await this.authService.logout();
   HomePage.check= false;
   this.router.navigateByUrl('/', {replaceUrl: true});
  }

}
