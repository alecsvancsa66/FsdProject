import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GcloudComponent } from './gcloud/gcloud.component';

import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gcloud', component: GcloudComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
