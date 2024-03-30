import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {
  public usersService = inject( UsersService )
}
