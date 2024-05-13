import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  githubUsername: string;
  userData: any;
  errorMessage: string = '';
  loading: boolean = false;
  
  @Output() userEvent = new EventEmitter<any>();  
  constructor(private apiService: ApiService) {
    this.githubUsername = '';
  }

  search() {
    this.loading = true; 
    this.apiService.getUser(this.githubUsername).subscribe(
      data => {
        this.userData = data;
        this.errorMessage = '';
        this.userEvent.emit(this.userData);
        console.log(this.userData);

      }, 
      error => {
        this.errorMessage = 'User Not found';
      }
    ).add(() => {
      this.loading = false; 
    });
  }
}
