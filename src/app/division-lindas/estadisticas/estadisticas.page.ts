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
  // single: any[]=[];
  
  view: [number,number] = [400, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition : any = 'null';
  colorScheme :Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7c78b8', '#5271ff', '#C7c5f4', '#AAAAAA', '#ffffff'] 
  };

  constructor( private store : FirestorageService) {
    // Object.assign(this, { this.store.datos });
  }
  get single(){
      return this.store.datos;
  }

  async onSelect(data: any) {
    // console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    const [nombre,id] = data['name'].split('-');
    await this.store.traerImagen(id, "infoImagenes").then(async x => {
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

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  } 
  ngOnInit() {
  }
 
  // setLabelFormatting(c : any): string {
  //   return `${c.label}<br/><span class="custom-label-text">${c.value}</span>`;
  // }

}

