import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [ MODULES ],
  exports: [ MODULES ],
})
export class MaterialModule {}
