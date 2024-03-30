import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],

  template: `
  <app-title [title]="currentFramework()"></app-title>
  <pre>
    <h3>As signal</h3>
    {{ frameworkAsSignal() | json }}
  </pre>
  <pre>
    <h3>As Property</h3>
    {{ frameworkAsProperty | json }}
  </pre>

  `
})
export default class ChangeDetectionComponent {
  public currentFramework = computed( // read only signal
    () => `Change detection - ${ this.frameworkAsSignal().name}`
  );


  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseData: 2016,
  })
  public frameworkAsProperty = ({
    name: 'Angular',
    releaseData: 2016,
  })

  constructor() {
    setTimeout(() => {

      //this.frameworkAsProperty.name = 'React'
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'React'
      }))
      console.log("Hecho")
    }, 3000);
  }
}
