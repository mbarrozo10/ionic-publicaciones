import { Injectable } from '@angular/core';
import{Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  async login ( user: string, pass: string){
    try{
      const usuario= await signInWithEmailAndPassword(
        this.auth,
        user,
        pass
      );
      return usuario;
    }catch(err){
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }

  retornarUsuario(){
    const user= this.auth.currentUser;
    // console.log(user);
    if(user != null){
      return user.email;
    }else{
      return 'null';
    }
  }

}
