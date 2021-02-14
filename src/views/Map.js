import React from 'react'
import { withGoogleMap, GoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";
import Geocode from "react-geocode";
Geocode.setApiKey("AIzaSyCCIRha3SZKoA4pJDTUlii2w91yINYo3kk");
Geocode.enableDebug();
class MapTest extends React.Component{
constructor( props ){
  super( props );
  this.state = {
   mapPosition: {
    lat: "0.35285539",
    lng: "32.583331"
   },
   markerPosition: {
    lat: "0.35285539",
    lng: "32.583331"
   },
    markerPosition2: {
    lat: "0.424542686",
    lng: "32.3923410"
   },
   markerPosition3: {
    lat: "0.3071709",
    lng: "32.578029"
   },
   markerPosition4: {
    lat: "0.3075453",
    lng: "32.591017"
   },
   markerPosition5: {
    lat: " 0.05727781",
    lng: "32.4615084"
   },
    markerPosition6: {
    lat: "0.24840383",
    lng: "32.6212765"
   },
     markerPosition7: {
    lat: "0.42038485",
    lng: "32.043476"
   },
     markerPosition8: {
    lat: "0.932111531",
    lng: "31.775473382"
   },
     markerPosition9: {
    lat: " 0.608540651",
    lng: "33.4732190"
   },
     markerPosition10: {
    lat: "0.945610574",
    lng: "33.127011"
   },
     markerPosition11: {
    lat: "0.37671883",
    lng: "32.938586"
   },
     markerPosition12: {
    lat: "2.76303256",
    lng: "32.29185403"
   },
     markerPosition13: {
    lat: "3.289731451",
    lng: "32.8791083"
   },
     markerPosition14: {
    lat: " -0.60337661",
    lng: "30.65212300"
   },
  }
 }
  onInfoWindowClose = ( event ) => {

  };



render(){
  const AsyncMap = withScriptjs(
    withGoogleMap(
    props => (
     <GoogleMap 
      google={this.props.google}
        defaultZoom={this.props.zoom}
        defaultCenter={{ lat: parseFloat(this.state.mapPosition.lat), lng: parseFloat(this.state.mapPosition.lng)  }}>

     <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition.lat), lng: parseFloat(this.state.markerPosition.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition2.lat), lng: parseFloat(this.state.markerPosition2.lng)  }}
      />
      <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition3.lat), lng: parseFloat(this.state.markerPosition3.lng)  }}
      />
      <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition4.lat), lng: parseFloat(this.state.markerPosition4.lng)  }}
      />
      <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition5.lat), lng: parseFloat(this.state.markerPosition5.lng)  }}
      />
      <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition6.lat), lng: parseFloat(this.state.markerPosition6.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition7.lat), lng: parseFloat(this.state.markerPosition7.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition8.lat), lng: parseFloat(this.state.markerPosition8.lng)  }}
      />

       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition9.lat), lng: parseFloat(this.state.markerPosition9.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition10.lat), lng: parseFloat(this.state.markerPosition10.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition11.lat), lng: parseFloat(this.state.markerPosition11.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition12.lat), lng: parseFloat(this.state.markerPosition12.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition13.lat), lng: parseFloat(this.state.markerPosition13.lng)  }}
      />
       <Marker 
        google={this.props.google}
          name={'Dolores park'}
            draggable={false}
            onDragEnd={ this.onMarkerDragEnd }
            position={{ lat: parseFloat(this.state.markerPosition14.lat), lng: parseFloat(this.state.markerPosition14.lng)  }}
      />
    </GoogleMap>
    )
   )
  );
  
let map;
  if(this.state.markerPosition.lat) {
   map = <div>
         <div>
          <h6 style={{ 'fontSize': '14px'}}>view areas in which we currently have motor service providers</h6>
         </div>
         <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCIRha3SZKoA4pJDTUlii2w91yINYo3kk"
          loadingElement={
           <div style={{ height: `100%` }} />
          }
          containerElement={
           <div style={{ height: this.props.height }} />
          }
          mapElement={
           <div style={{ height: `100%` }} />
          }
         />
        </div>
} else {
   map = <div style={{height: this.props.height}} />
  }
  return( map )
 }
}
export default MapTest
