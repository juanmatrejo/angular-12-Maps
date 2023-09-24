import { Component } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerMap } from 'src/app/classes/markerMap.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MapEditComponent } from './map-edit.component';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent {

	display: any;
	center: google.maps.LatLngLiteral = {

		lat: 19.557058,
		lng: -99.188748
	};
	zoom = 15;

	markersMap: MarkerMap[] = [];

	constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) {

		const markers = localStorage.getItem('markers');

		if (markers) {

			this.markersMap = JSON.parse(markers);
		}
	}

	moveMap(event: google.maps.MapMouseEvent) {

		if (event.latLng != null) {

			this.center = (event.latLng.toJSON());
		}
	}

	move(event: google.maps.MapMouseEvent) {

		if (event.latLng != null) {

			this.display = event.latLng.toJSON();
		}
	}

	openInfoWindow(marker: MapMarker, infoWindow: MapInfoWindow) {

		infoWindow.open(marker);
	}

	addMarker() {

		this.markersMap.push(new MarkerMap(this.display.lat, this.display.lng));
		this.saveMarkers();

		this._snackBar.open('Marker added.', "Close",
			{
				duration: 2000,
				horizontalPosition: 'right',
				verticalPosition: 'top'
			});
	}

	saveMarkers() {

		localStorage.setItem('markers', JSON.stringify(this.markersMap));
	}

	deleteMarker(idx: number) {

		this.markersMap.splice(idx, 1);
		this.saveMarkers();

		this._snackBar.open('Marker deleted.', "Close",
			{
				duration: 2000,
				horizontalPosition: 'right',
				verticalPosition: 'bottom'
			});
	}

	editMarker(marker: MarkerMap) {

		const dialogRef = this._dialog.open(MapEditComponent, {
			height: '260px',
			width: '250px',
			data: { title: marker.title, description: marker.description },
		});

		dialogRef.afterClosed().subscribe(result => {

			if (result) {

				marker.title = result.title;
				marker.description = result.description;

				this.saveMarkers();
				this._snackBar.open('Marker up to date.', "Close",
				{
					duration: 2000,
					horizontalPosition: 'center',
					verticalPosition: 'top'
				});
				}
		});
	}
}
