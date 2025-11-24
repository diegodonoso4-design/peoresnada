import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ConfirmModalComponent {
  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss(true); // Retorna verdadero si el usuario confirma
  }

  cancelar() {
    this.modalCtrl.dismiss(false); // Retorna falso si cancela
  }
}