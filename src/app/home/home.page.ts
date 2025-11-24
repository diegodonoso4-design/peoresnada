import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, ViewWillEnter } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

// Importaciones de tus servicios y componentes
import { AvisoService, Aviso } from '../services/aviso';
import { AvisoItemComponent } from '../components/aviso-item/aviso-item.component';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';
import { ViewAvisoModalComponent } from '../components/view-aviso-modal/view-aviso-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, AvisoItemComponent]
})
export class HomePage implements ViewWillEnter {
  avisos: Aviso[] = [];

  constructor(
    private avisoService: AvisoService,
    private modalCtrl: ModalController
  ) {
    addIcons({ add });
  }

  async ionViewWillEnter() {
    this.avisos = await this.avisoService.getAvisos();
  }

  // 1. Lógica para VER DETALLE (Modal Grande con imagen)
  async verDetalle(avisoSeleccionado: Aviso) {
    const modal = await this.modalCtrl.create({
      component: ViewAvisoModalComponent,
      componentProps: {
        aviso: avisoSeleccionado // Pasamos el objeto completo al modal
      }
    });
    await modal.present();
  }

  // 2. Lógica para ELIMINAR (Modal Pequeño tipo Popup)
  async confirmarBorrado(id: number) {
    const modal = await this.modalCtrl.create({
      component: ConfirmModalComponent,
      cssClass: 'modal-alerta', // Clase CSS global para estilo pequeño
      backdropDismiss: false
    });
    
    await modal.present();
    const { data } = await modal.onWillDismiss();
    
    if (data === true) {
      await this.avisoService.deleteAviso(id);
      this.avisos = await this.avisoService.getAvisos(); // Refrescar lista
    }
  }
}