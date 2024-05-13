import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchBarComponent } from './MyComponents/search-bar/search-bar.component'
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component'
import { ReposListComponent } from './MyComponents/repos-list/repos-list.component'
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,FormsModule ],
    declarations: [AppComponent,SearchBarComponent,UserProfileComponent,ReposListComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
