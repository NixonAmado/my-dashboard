import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector : 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="text-center text-3xl mb-5 bg-slate-400">
   {{title}} - {{withShadow}}
    </h1> 
  `
})
export class TitleComponent {
  @Input({ required: true}) title!: string ;
  @Input({ transform: booleanAttribute}) withShadow: boolean = false;
}
