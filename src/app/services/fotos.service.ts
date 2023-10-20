import { Injectable } from '@angular/core';
import {Camera,CameraPhoto,CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { FotoI } from '../models/fotoI';
import { rejects } from 'assert';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root'
})
export class FotosService {
  public Fotos: FotoI[]=[];
  private PHOTO_STORAGE= 'photos'
  constructor() { }

  public async nuevaFoto(){
    const resultado = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value:JSON.stringify(this.Fotos.map(p => {
        const copy={...p};
        delete copy.base64;
        return copy
      }))
    });
    // // this.test= resultado.();
    // this.Fotos.unshift({
    //   filepath: "foto",
    //   webviewPath: resultado.webPath
    // });
    const img = await this.guardarFoto(resultado);
    this.Fotos.unshift(img);
    
  }

  public async load(){
    let photos: any='asdasdd';
    photos = await Preferences.get({
      key: this.PHOTO_STORAGE
    });
    this.Fotos = JSON.parse(photos.value) || [] ;
    for(let p of this.Fotos){
        const read = await Filesystem.readFile({
          path: photos.filepath,
          directory: Directory.Data
        })
        p.webviewPath = `data:image/jpeg;base64,${read.data}`;
    }

  }

  public async guardarFoto(cameraPhoto: CameraPhoto){
    console.log(cameraPhoto);
    const base64Data= await this.read(cameraPhoto);
    const filename=  "oryev.jpeg";
    const savedFile= await Filesystem.writeFile({
      path: filename,
      data: base64Data,
      directory: Directory.Data
    });
    console.log(savedFile.uri);
    return{
      filepath: filename,
      webviewPath: savedFile,
      base64: base64Data
    }
  }

  public async read(cameraPhoto: CameraPhoto){
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();
    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64= (blob: Blob) => new Promise((resolve, reject) => {
    const reader= new FileReader();
    reader.onerror = reject;
    reader.onload = () =>
    {
      resolve(reader.result);
    }
    reader.readAsDataURL(blob);
  })

}
