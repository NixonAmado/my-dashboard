import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  standalone: true,
  imports: [HeavyLoadersSlowComponent],
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}

/*
@Defer
  los defer blocks/funtions/views son un comportamiento
  que podemos añadir a los templates para decir de que manera
  queremos que cargue el componente
  Es llevar el lazy load al siguente nivel
*/
