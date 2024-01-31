import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';
import { CertificateRoutingModule } from './certificate.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    CertificateRoutingModule,
    PipesModule,
  ],
  declarations: [CertificateComponent]
})
export class CertificateModule { }
