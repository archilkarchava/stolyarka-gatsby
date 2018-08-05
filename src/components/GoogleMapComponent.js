import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const mapLightStyle = [{
  "featureType": "water",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#d3d3d3"
  }]
}, {
  "featureType": "transit",
  "stylers": [{
    "color": "#808080"
  }, {
    "visibility": "off"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.stroke",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#b3b3b3"
  }]
}, {
  "featureType": "road.highway",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#ffffff"
  }, {
    "weight": 1.8
  }]
}, {
  "featureType": "road.local",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#d7d7d7"
  }]
}, {
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#ebebeb"
  }]
}, {
  "featureType": "administrative",
  "elementType": "geometry",
  "stylers": [{
    "color": "#a7a7a7"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#ffffff"
  }]
}, {
  "featureType": "landscape",
  "elementType": "geometry.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#efefef"
  }]
}, {
  "featureType": "road",
  "elementType": "labels.text.fill",
  "stylers": [{
    "color": "#696969"
  }]
}, {
  "featureType": "administrative",
  "elementType": "labels.text.fill",
  "stylers": [{
    "visibility": "on"
  }, {
    "color": "#737373"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "poi",
  "elementType": "labels",
  "stylers": [{
    "visibility": "off"
  }]
}, {
  "featureType": "road.arterial",
  "elementType": "geometry.stroke",
  "stylers": [{
    "color": "#d6d6d6"
  }]
}, {
  "featureType": "road",
  "elementType": "labels.icon",
  "stylers": [{
    "visibility": "off"
  }]
}, {}, {
  "featureType": "poi",
  "elementType": "geometry.fill",
  "stylers": [{
    "color": "#dadada"
  }]
}]

const mapDarkStyle = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "saturation": 36
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 40
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  }
]

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 55.1215000, lng: 61.3630000 }}
    defaultOptions={{ styles: (props.lightBg && mapLightStyle) || (props.darkBg && mapDarkStyle) || mapLightStyle, scrollwheel: false, zoomControl: true }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 55.120993, lng: 61.364150 }} />}
  </GoogleMap>
))

export default Map;
