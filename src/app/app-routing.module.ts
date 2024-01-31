import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/index/index.module').then(m => m.IndexModule) },
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'skills', loadChildren: () => import('./features/skill/skill.module').then(m => m.SkillModule) },
  { path: 'certificates', loadChildren: () => import('./features/certificate/certificate.module').then(m => m.CertificateModule) },
  { path: 'works', loadChildren: () => import('./features/work/work.module').then(m => m.WorkModule) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.module').then(m => m.ContactModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
