import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchBarComponent } from './MyComponents/search-bar/search-bar.component';
import { ReposListComponent } from './MyComponents/repos-list/repos-list.component';
import { UserProfileComponent } from './MyComponents/user-profile/user-profile.component';
import { UserRepoComponent } from './MyComponents/user-repo/user-repo.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ReposListComponent,
    UserProfileComponent,
    UserRepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
