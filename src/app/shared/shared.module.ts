import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsComponent } from '../components/comments/comments.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    HeaderComponent,
    CommentsComponent
  ],
  entryComponents: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    CommentsComponent
  ],
})
export class SharedModule {
}
