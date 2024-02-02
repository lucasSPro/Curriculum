import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificateComponent } from './certificate.component';
import { CertificateRoutingModule } from './certificate.routing';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { CertificateCardComponent } from './components/certificate-card/certificate-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CertificateModalComponent } from './components/certificate-modal/certificate-modal.component';

@NgModule({
  imports: [
    CommonModule,
    CertificateRoutingModule,
    PipesModule,
    FontAwesomeModule,
  ],
  declarations: [
    CertificateComponent,
    CertificateCardComponent,
    CertificateModalComponent,
  ]
})
export class CertificateModule { }
