import React, {useCallback, useEffect, useState} from "react";
import {
    AdvancedMarker,
    APIProvider,
    ControlPosition,
    InfoWindow,
    Map,
    MapControl,
    MapMouseEvent, useAdvancedMarkerRef,
    useMap
} from "@vis.gl/react-google-maps";
import {Button, CardMedia, Typography} from "@mui/material";
import {PlaceAutocomplete} from "@/app/trips/123/itinerary/PlaceAutoComplete";
import {Coordinates, Destination, Place} from "@/app/trips/123/itinerary/types";
import {GOOGLE_PUBLIC_API_KEY} from "@/app/trips/123/itinerary/Itinerary";

export function MapWithMarkers(props: {
    places: any[],
    destination: Destination,
    updatePlaces: (place: Place | null) => void,
}) {

    console.log('MapWithMarkers', props.places, props.destination)


    const [selectedGooglePlace, setSelectedGooglePlace] = useState<google.maps.places.Place | null>(null);
    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
    const [infoWindowPosition, setInfoWindowPosition] = useState<Coordinates | null>(null);
    const [marker, setMarker] = useState(null);

    const onSelectedGooglePlaceResultClick = (place: google.maps.places.PlaceResult | null) => {
        console.log('onSelectedPlace', place)

        if (!place) return;

        // TODO Add to places list
        props.updatePlaces({
            date: '',
            name: place.name || '',
            coordinates: place.geometry?.location ? {
                lat: place.geometry?.location?.lat(),
                lng: place.geometry?.location?.lng()
            } : undefined,
            address: place.formatted_address || '',
            phone: place.formatted_phone_number || '',
            website: place.website || '',
            notes: ''
        });
        setSelectedPlace(place);
    }

    const onSelectedPlace = (place: Place) => {
        console.log('onSelectedPlace', place)

        if (!place) return;

        // TODO Add to places list
        props.updatePlaces(place);
    }


    // clicking the marker will toggle the infowindow
    const handleMarkerClick = useCallback(
        (currentMarker: any) => {
            setMarker(currentMarker);
            setInfoWindowShown(isShown => !isShown)
        },
        []
    );

    // if the maps api closes the infowindow, we have to synchronize our state
    const handleClose = useCallback(() => {
        setInfoWindowShown(false);
        setInfoWindowPosition(null);
        setMarker(null);
    }, []);

    const mapOnClick = useCallback(async (event: MapMouseEvent) => {

        if (!event.detail.placeId) {
            return;
        }

        console.log('Map clicked', event, event.detail);
        event.stop();
        setInfoWindowShown(true);
        setInfoWindowPosition(event.detail.latLng);

        {/* TODO Do API call to get place by ID. Display the content. */}
        const { Place } = await google.maps.importLibrary('places') as google.maps.PlacesLibrary;

        // Use a place ID to create a new Place instance.
        const place = new Place({
            id: event.detail.placeId,
        });

        // Call fetchFields, passing the desired data fields.
        await place.fetchFields({ fields: ['displayName', 'photos', 'formattedAddress', 'location', 'internationalPhoneNumber'] });

        console.log('place', place);

        // Add photos to the gallery.
        if (place.photos) {
            setSelectedGooglePlace(place);
        }


    }, []);

    return <APIProvider apiKey={GOOGLE_PUBLIC_API_KEY}>
        {/* DEFAULT Position - first position, if none get the coordinats of main area. */}
        <Map mapId={"users-map"} defaultCenter={props.destination.location.coordinates} defaultZoom={13}
             onClick={mapOnClick}
             style={{width: '60vw', height: '50vh'}}>
            {infoWindowShown && marker && (
                <InfoWindow anchor={marker} onClose={handleClose}>
                    <h2>InfoWindow content!</h2>
                    <Typography>Some arbitrary html to be rendered into the InfoWindow.</Typography>
                    {/* TODO Add remove. */}
                    {/* TODO Add set Date. */}
                </InfoWindow>
            )}
            {infoWindowShown && infoWindowPosition && (
                <InfoWindow position={infoWindowPosition} onClose={handleClose}>

                    <CardMedia component="img" height="200" image={selectedGooglePlace?.photos![0].getURI()} />

                    {/*place.photos![0].getURI()*/}
                    {/* <Avatar alt="Example Alt" src={selectedGooglePlace?.photos![0].getURI()} />*/}

                    <Typography>{selectedGooglePlace?.displayName}</Typography>
                    {/* TODO Add set Date. */}
                    {/*{selectedGooglePlace && selectedGooglePlace?.photos && <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {selectedGooglePlace?.photos?.map((item) => {

                            const URL = item.getURI();
                            console.log('item', item);
                            return <ImageListItem key={URL}>
                                <img
                                    srcSet={`${URL}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${URL}?w=164&h=164&fit=crop&auto=format`}
                                    alt={""}
                                />
                            </ImageListItem>
                        })}
                    </ImageList>}*/}

                    <Button onClick={() => {
                        handleClose();
                        onSelectedPlace({
                            address: selectedGooglePlace?.formattedAddress || '',
                            placeId: selectedGooglePlace?.id || '',
                            coordinates: {
                                lat: selectedGooglePlace?.location?.lat() || 0,
                                lng: selectedGooglePlace?.location?.lng() || 0
                            },
                            date: "",
                            notes: "",
                            phone: selectedGooglePlace?.internationalPhoneNumber || '',
                            website: selectedGooglePlace?.websiteURI || '',
                            name: selectedGooglePlace?.displayName || ''
                        })
                    }}>Add</Button>

                </InfoWindow>
            )}
            {props.places?.filter(p => p.coordinates).map(p => {
                return <AdvancedMarkerWithRef key={p.name} place={p} handleMarkerClick={handleMarkerClick}/>
            })};
        </Map>
        <MapControl position={ControlPosition.TOP}>
            <div className="autocomplete-control">
                <PlaceAutocomplete onPlaceSelect={onSelectedGooglePlaceResultClick} position={props.destination.location.coordinates}/>
            </div>
        </MapControl>
        <MapHandler place={selectedPlace} marker={marker}/>
    </APIProvider>
}

interface MapHandlerProps {
    place: google.maps.places.PlaceResult | null;
    marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({place, marker}: MapHandlerProps) => {
    const map = useMap();

    useEffect(() => {
        if (!map || !place || !marker) return;

        if (place.geometry?.viewport) {
            map.fitBounds(place.geometry?.viewport);
        }
        marker.position = place.geometry?.location;
    }, [map, place, marker]);

    return null;
};

export function AdvancedMarkerWithRef(props: { place: any, handleMarkerClick: any }) {
    // `markerRef` and `marker` are needed to establish the connection between
    // the marker and infowindow (if you're using the Marker component, you
    // can use the `useMarkerRef` hook instead).
    const [markerRef, marker] = useAdvancedMarkerRef();

    return <AdvancedMarker key={props.place.name} position={props.place.coordinates}
                           onClick={() => props.handleMarkerClick(marker)} ref={markerRef}>
        {/*<Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />*/}
    </AdvancedMarker>;
}