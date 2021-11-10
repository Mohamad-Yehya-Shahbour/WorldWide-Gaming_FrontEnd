import React, { useState, useEffect } from "react";
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import * as parkData from "./data/Dummy.json";
import Button from '@mui/material/Button';
import api from "../../../services/api";

//import mapStyles from "./mapStyles";

function Map() {
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(null)
  const [events, setEvents] = useState([]);
  const userId = localStorage.getItem("user_id");
  const [join, setJoin] = useState(false)

  if (join == true){
    setJoin(false)
    console.log(userId);
  }


  useEffect(() => {
    api
        .getEvents()
        .then((response)=>{
            console.log(response.data);
            setEvents(response.data);
        })
        .catch((error)=>{console.log(error.response)})
    const listener = e => {
      if (e.key === "Escape") {
        setEvent(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  },[]);


  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 34, lng: 36 }}
      //defaultOptions={{ styles: mapStyles }}
    >
      {events.map(event => (
        <Marker
          key={`event${event.id}`}
          position={{
            lat: event.lat,
            lng: event.long
          }}
          onClick={() => {
            
            setEvent(event);
            setEventId(event.id);
          }}
          icon={{
            url:'/pin.svg',
            scaledSize: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {event && (
        <InfoWindow
          onCloseClick={() => {
           
            setEvent(null);
          }}
          position={{
            lat: event.lat,
            lng: event.long
          }}
        >
          <div className="container-fluid p-1">
            <h5>{event.title}</h5>
            <p>{event.description}</p>
            <Button id={`joinEvent${event.id}`}  color="inherit" size="small" className="btn btn-outline"> join</Button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function EventsItemMap() {
    return (
        <div style={{ width: "100%", height: "100%" }}>
            <MapWrapped
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default EventsItemMap
