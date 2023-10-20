import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { FirestorageService } from 'src/app/services/firestorage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
 
  // multi: any[];
  view: [number,number] = [400, 200];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fotos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Likes';
  legendTitle: string = 'Years';
  legendPosition : any = 'null';

  colorScheme :Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7c78b8', '#5271ff', '#C7c5f4', '#AAAAAA', '#ffffff'] 
  };

  constructor( private store : FirestorageService) {
    // Object.assign(this, { multi })
  }
  get single(){
    return this.store.datosFeas;
  }

 async onSelect(data: any) {
  const [nombre,id] = data['name'].split('-');
     await this.store.traerImagen(id, "infoImagenesFeas").then(async x => {
      console.log(x)
      Swal.fire({
        imageUrl: x,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        heightAuto: false
      })
     });
   
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
  }
}
