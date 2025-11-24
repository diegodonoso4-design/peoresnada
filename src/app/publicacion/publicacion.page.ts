import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; // Plugin Cámara
import { AvisoService } from 'src/app/services/aviso'; // Ajusta ruta si es necesario

// 1. IMPORTAR addIcons y el ícono específico
import { addIcons } from 'ionicons';
import { camera } from 'ionicons/icons';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class PublicacionPage {
  formPublicacion: FormGroup;
  fotoCapturada: string | null = null;

  constructor(
    private fb: FormBuilder,
    private avisoService: AvisoService,
    private router: Router
  ) {
    // 2. REGISTRAR EL ÍCONO PARA QUE IONIC LO ENCUENTRE
    addIcons({ camera });

    // Validaciones: Título min 5 chars, Descripción min 20 chars
    this.formPublicacion = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  // Uso del Plugin de Cámara
  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, // Base64 para guardar fácil
      source: CameraSource.Camera
    });
    this.fotoCapturada = image.dataUrl ?? null;
  }

  async guardar() {
    if (this.formPublicacion.invalid) {
      this.formPublicacion.markAllAsTouched(); // Muestra errores visuales
      return;
    }

    const nuevoAviso = {
      id: Date.now(),
      titulo: this.formPublicacion.value.titulo,
      descripcion: this.formPublicacion.value.descripcion,
      fecha: new Date(), // Fecha actual automática
      imagen: this.fotoCapturada || ''
    };

    await this.avisoService.addAviso(nuevoAviso);
    this.router.navigate(['/home']); // Volver al listado
  }
}