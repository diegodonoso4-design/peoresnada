import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'; // [cite: 1483]

// Definición de la estructura del aviso
export interface Aviso {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  private KEY_STORAGE = 'avisos_data';

  constructor() { }

  // Obtiene todos los avisos guardados
  async getAvisos(): Promise<Aviso[]> {
    const { value } = await Preferences.get({ key: this.KEY_STORAGE });
    return value ? JSON.parse(value) : [];
  }

  // Agrega un nuevo aviso al inicio de la lista
  async addAviso(aviso: Aviso) {
    const avisos = await this.getAvisos();
    avisos.unshift(aviso);
    await this.storageSave(avisos);
  }

  // Elimina un aviso por su ID
  async deleteAviso(id: number) {
    let avisos = await this.getAvisos();
    avisos = avisos.filter(a => a.id !== id);
    await this.storageSave(avisos);
  }

  // Método privado para guardar en el dispositivo
  private async storageSave(avisos: Aviso[]) {
    await Preferences.set({
      key: this.KEY_STORAGE,
      value: JSON.stringify(avisos)
    });
  }
}