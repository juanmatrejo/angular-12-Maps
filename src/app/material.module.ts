import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule,
		MatButtonModule,
		MatProgressBarModule,
		MatCardModule,
		GoogleMapsModule,
		MatSnackBarModule,
		MatDialogModule,
		MatInputModule
	],
	exports: [
		MatToolbarModule,
		MatButtonModule,
		MatProgressBarModule,
		MatCardModule,
		GoogleMapsModule,
		MatSnackBarModule,
		MatDialogModule,
		MatInputModule
	]
})
export class MaterialModule { }
