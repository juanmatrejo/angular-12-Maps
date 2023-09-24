export class MarkerMap {

    public title: string = 'No title.';
    public description: string = 'No description.';
    public position: Position;

    constructor(lat: number, lng: number) {
        this.position = new Position();
        this.position.lat = lat;
        this.position.lng = lng;
    }
}

class Position { lat: number = 0; lng: number = 0; }
