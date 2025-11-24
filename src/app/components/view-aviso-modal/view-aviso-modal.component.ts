import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { close, arrowBack } from 'ionicons/icons';
import { Aviso } from 'src/app/services/aviso'; // Asegúrate de que la ruta a tu interfaz sea correcta

@Component({
  selector: 'app-view-aviso-modal',
  templateUrl: './view-aviso-modal.component.html',
  styleUrls: ['./view-aviso-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ViewAvisoModalComponent {
  
  @Input() aviso!: Aviso; // Recibimos el objeto aviso completo

  constructor(private modalCtrl: ModalController) {
    // Registramos íconos para el botón de cerrar/atrás
    addIcons({ close, arrowBack });
  }

  cerrar() {
    this.modalCtrl.dismiss();
  }
}