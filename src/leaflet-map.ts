import "leaflet/dist/leaflet.css";
import "./leaflet-map.css";
import L, { map, Map, tileLayer, TileLayer } from "leaflet";
import { children } from "aurelia";
import { LeafletMarkerCustomElement } from "./leaflet-marker";



declare module "leaflet" {
    namespace TileLayer {
        Kitten: any;
    }
}

TileLayer.Kitten = TileLayer.extend({
    getTileUrl: function(coords) {
        var i = Math.ceil( Math.random() * 4 );
        return "https://placekitten.com/256/256?image=" + i;
    },
    getAttribution: function() {
        return "<a href='https://placekitten.com/attribution.html'>PlaceKitten</a>"
    }
});

tileLayer.kitten = function() {
    return new L.TileLayer.Kitten();
}

export class LeafletMapCustomElement {
  private map: Map;

//   @children({ filter: x => true })
//   markers: lay[];

  constructor(private element: HTMLElement) {
    debugger;
  }

  binding() {
    debugger;
    this.map = map(this.element);
    
    tileLayer.kitten().addTo(map);

  }

  unbinding() {
    debugger;
    this.map.remove();
  }
}
