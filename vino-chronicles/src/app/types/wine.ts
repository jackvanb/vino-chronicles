export interface Wine {
  title: string;
  description: string;
  location?: google.maps.LatLngLiteral;
  tastingNotes: string[];
}
