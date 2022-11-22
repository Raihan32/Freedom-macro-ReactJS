import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Googlemaps = () => {
  // Atur LongLat Focus map disini saya mengatur LongLat yang mengarah ke Jakarta
  const center = {
    lat: -6.2269976,
    lng: 106.7848748,
  };

  // ContainerStyle Berfungsi Untuk Mengatur StyleContainer Untuk google maps
  const containerStyle = {
    width: "90%",
    height: "400px",
    marginLeft: "100px",
    borderRadius: "20px",
  };

  return (
    <>
      <LoadScript googleMapsApiKey={`AIzaSyCJ15xAKr08J-kqy50u6GXxZ4LpwJAPGUo`}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker
            //Titik Marker akan di letakkan dengan menentukan LongLat
            position={{
              lat: -6.214511929764319,
              lng: 106.84522285129088,
            }}
            // Jika Ingin Marker dapat di drag rubah value draggable menjadi true
            draggable={false}
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default Googlemaps;
