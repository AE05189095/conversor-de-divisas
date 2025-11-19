import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // imports necesarios para que funcione el template con ngModel y componentes Ion
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, FormsModule],
})
export class Tab1Page {
  // cantidad ingresada por el usuario (quetzales)
  quetzales: number | null = null;
  // resultado en dólares
  dolares: number | null = null;
  // indica si el usuario intentó convertir (para mostrar mensajes de error después)
  triedConvert = false;

  // tipo/constante de conversión
  readonly TASA = 8; // 8 quetzales = 1 dólar

  constructor() {}

  convert(): void {
    this.triedConvert = true;

    // Asegurarse de convertir el valor a número y validar que sea finito y >= 0
    const q = Number(this.quetzales);
    if (!isFinite(q) || q < 0) {
      this.dolares = null;
      return;
    }

    // conversión simple (permitir 0 en adelante)
    this.dolares = +(q / this.TASA).toFixed(2);
  }

  reset(): void {
    this.quetzales = null;
    this.dolares = null;
    this.triedConvert = false;
  }
}
