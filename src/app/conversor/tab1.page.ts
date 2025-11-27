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
  IonToggle,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  // imports necesarios para que funcione el template con ngModel y componentes Ion
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonItem, IonLabel, IonToggle, FormsModule],
})
export class Tab1Page {
  // cantidad ingresada por el usuario (quetzales)
  quetzales: number | null = null;
  // resultado en dólares
  dolares: number | null = null;
  // modo privado para ocultar la parte entera del resultado
  modoPrivado = false;
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

  // Retorna el texto a mostrar para el monto en dólares, ocultando la
  // parte entera con asteriscos si `modoPrivado` está activo.
  getDolaresMostrados(): string {
    if (this.dolares === null || this.dolares === undefined) {
      return '';
    }

    const value = this.dolares;
    // formatear con 2 decimales
    const formatted = Math.abs(value).toFixed(2); // e.g. "12543.89"
    const parts = formatted.split('.');
    const entero = parts[0] || '0';
    const decimales = parts[1] || '00';

    const signo = value < 0 ? '-' : '';

    if (!this.modoPrivado) {
      return `${signo}${entero}.${decimales}`;
    }

    // reemplazar cada dígito tanto del entero como de los decimales por '*'
    const ocultoEntero = entero.replace(/\d/g, '*');
    const ocultoDecimales = decimales.replace(/\d/g, '*');
    const enteroOculto = ocultoEntero.length > 0 ? ocultoEntero : '*';

    return `${signo}${enteroOculto}.${ocultoDecimales}`;
  }
}
