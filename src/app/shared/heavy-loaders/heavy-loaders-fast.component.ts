import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]= "['w-full', cssClass]">
    <ng-content />
  </section>
`
})
export class HeavyLoadersFastComponent {
  @Input( { required: true}) cssClass!: string
}

// El elemento <ng-content> sirve para proyectar contenido dentro de una plantilla de componente en Angular1. Esto significa que puedes insertar elementos HTML o componentes personalizados dentro de otro componente, y controlar cómo se renderizan y estilan2.