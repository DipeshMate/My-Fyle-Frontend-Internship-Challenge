import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-repo',
  templateUrl: './user-repo.component.html',
  styleUrls: ['./user-repo.component.scss']
})
export class UserRepoComponent {
  @Input() repo: any;
  constructor() {
   }
}
