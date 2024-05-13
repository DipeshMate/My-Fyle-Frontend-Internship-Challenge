import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposListComponent } from './repos-list.component';
import { ApiService } from '../../services/api.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ReposListComponent', () => {
  let component: ReposListComponent;
  let fixture: ComponentFixture<ReposListComponent>;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ReposListComponent],
      providers: [ApiService]
    });
    fixture = TestBed.createComponent(ReposListComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call extractRepos() and return user repo data', () => {
    const mockRepoData = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    spyOn(apiService, 'getRepos').and.returnValue(of(mockRepoData));

    component.userData = { login: 'testuser', public_repos: 2 };
    component.ngOnChanges();

    expect(component.repoData).toEqual(mockRepoData);
    expect(component.errorMessage).toEqual('');
    expect(component.loading).toEqual(false);
  });

  it('should handle error when extractRepos() is called', () => {
    const error = { status: 404, message: 'Invalid user' };
    spyOn(apiService, 'getRepos').and.returnValue(throwError(error));

    component.userData = { login: 'testuser', public_repos: 2 };
    component.ngOnChanges();

    expect(component.errorMessage).toEqual('Invalid user');
    expect(component.loading).toEqual(false);
  });
});
