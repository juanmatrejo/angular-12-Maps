import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-map-edit',
	templateUrl: './map-edit.component.html',
	styleUrls: ['./map-edit.component.css']
})
export class MapEditComponent {

	_formGroup: FormGroup;

	constructor(public _dialogRef: MatDialogRef<MapEditComponent>,
		@Inject(MAT_DIALOG_DATA) public _data: any,
		public _formBuilder: FormBuilder) {

		this._formGroup = _formBuilder.group({
			'title': _data.title,
			'description': _data.description
		});
	}

	saveChanges() {

		this._dialogRef.close(this._formGroup.value);
	}

	close() {

		this._dialogRef.close();
	}
}
