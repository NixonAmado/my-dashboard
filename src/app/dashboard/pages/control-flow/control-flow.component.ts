import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
type Grade = 'A'|'B'|'F';
@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})

export default class DashboardComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'svelte', 'Quik', 'React'])
  public frameworks2 = signal([])

  public toogleContent(){
    this.showContent.update(signal => !signal);
  }
}
