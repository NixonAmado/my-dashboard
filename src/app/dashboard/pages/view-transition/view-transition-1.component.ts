import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template: `
    <app-title title="View Transition 1"/>
    <section class="flex justify-start ">    
      <div
        class=" bg-blue-500 w-full absolute z-10 h-dvh"
        style="view-transition-name:hero2"
        >
        <img srcset="https:picsum.photos/id/237/200/300"
      alt="Picsum"
      width="200"
      height="300"
      class= "border-spacing-20 border-separate top-44 relative p-5 bg-black"
      style="view-transition-name:hero1; z-index:-1; background:red;"

      />


      </div>
    </section>
  `
})
export default class ViewTransitionComponent {

}
