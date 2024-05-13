import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.scss']
})
export class ReposListComponent implements OnChanges {
  @Input() userData: any;
  repoData: any;
  currentPage: number = 1;
  reposPerPage: number = 10;
  totalPages!: number;
  cache: any = {};
  errorMessage: string = '';  
  loading: boolean = false;

  ngOnInit(): void {}

  constructor(private apiService: ApiService) {}

  extractRepos() {
    this.loading = true; 
    if (!this.cache[this.currentPage]) {
      this.cache[this.currentPage] = {};
    }

    if (this.cache[this.currentPage][this.reposPerPage]) {
      this.repoData = this.cache[this.currentPage][this.reposPerPage];
      this.loading = false; 
    } else {
      this.apiService.getRepos(this.userData.login, this.currentPage, this.reposPerPage).subscribe(data => {
        this.repoData = data;
        this.cache[this.currentPage][this.reposPerPage] = data;
      }, error => {
        this.errorMessage = 'Invalid user';  
      }).add(() => {
        this.loading = false; 
      });
    }
  }

  ngOnChanges() {
    if (this.userData) {
      this.totalPages = Math.ceil(this.userData.public_repos / this.reposPerPage);
      this.extractRepos();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.extractRepos();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.extractRepos();
    }
  }

  changeReposPerPage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.reposPerPage = Number(selectElement.value);
    this.totalPages = Math.ceil(this.userData.public_repos / this.reposPerPage);
    this.currentPage = 1;
    this.extractRepos();
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.extractRepos();
  }
}
