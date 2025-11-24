import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons'; // <--- Importar esto
import { trashOutline } from 'ionicons/icons'; // <--- Importar el ícono específico
import { Aviso } from 'src/app/services/aviso';

@Component({
  selector: 'app-aviso-item',
  templateUrl: './aviso-item.component.html',
  styleUrls: ['./aviso-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class AvisoItemComponent {
  @Input() aviso!: Aviso;
  @Output() eliminar = new EventEmitter<number>();
  @Output() ver = new EventEmitter<Aviso>(); // Nuevo evento para ver detalle

  constructor() {
    // REGISTRA EL ÍCONO 
    addIcons({ trashOutline });
  }

  onEliminar(event: Event) {
    event.stopPropagation(); // Evita que se abra el detalle al borrar
    this.eliminar.emit(this.aviso.id);
  }

  onVerDetalle() {
    this.ver.emit(this.aviso); // Emitimos el aviso completo al padre
  }
}