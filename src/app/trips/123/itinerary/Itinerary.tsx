'use client';

import {
    Avatar,
    Box, Button, CardMedia, Collapse, Divider,
    Drawer,
    Grid, ImageList, ImageListItem,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import {
    AdvancedMarker,
    APIProvider, ControlPosition,
    InfoWindow,
    Map, MapControl, MapMouseEvent, Pin,
    useAdvancedMarkerRef, useMap,
    useMapsLibrary
} from "@vis.gl/react-google-maps";
import React, {useCallback, useEffect, useRef, useState} from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import RemoveIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {GoogleNearbyPlaces} from "@/app/trips/123/itinerary/page";
import {Itinerary, Place, Coordinates, Destination} from "@/app/trips/123/itinerary/types";
import {MapWithMarkers} from "@/app/trips/123/itinerary/MapWithMarkers";
import {DiscoverMode} from "@/app/trips/123/itinerary/DiscoverMode";

export const GOOGLE_PUBLIC_API_KEY = 'AIzaSyD07ghI7JVp17zPEURbCnLM7PEpVaFabIw'; // TODO Move

// TODO Support multiple destinations
const itinerary: Itinerary = {
    destination: { /* TODO Ability to sync with google saved lists or manually import, a popup with all the places to select from (disable any places already added) */
        id: 'destination-123',
        location: {
            coordinates: {lat: -26.382126355033094, lng: 153.0991490827138},
            name: 'Sunshine Coast, Australia',
        },
        title: 'Trip to Sunshine Coast, Australia',
        startDate: '2024-09-15',
        endDate: '2024-09-20', // TODO Change to 11/12/2024
        timezone: 'Australia/Brisbane'
    },
    places: [
        {
            date: '2024-9-15',
            name: 'Bike ride on the Noosa River',
            //coordinates: '',
            coordinates: {lat: -26.37307381270518, lng: 153.00979657763244},
            address: '',
            phone: '',
            website: '',
            notes: ''
        },
        {
            date: '2024-9-16',
            name: 'Rainbow Beach',
            coordinates: {lat: -25.896870315927817, lng: 153.09001469577674},
            address: 'Cooloola Dr, Rainbow Beach QLD 4581, Australia',
            phone: '',
            website: '',
            notes: ''
        },
        {
            date: '2024-9-16',
            name: 'Lake Cooroibah',
            coordinates: {lat: -26.349535407002623, lng: 153.03350488537515},
            address: 'Cooroibah QLD 4565, Australia',
            phone: '',
            website: '',
            notes: ''
        },
        {
            date: '',
            name: 'Buderim Forest Park',
            coordinates: {lat: -26.67874248141348, lng: 153.04808963872844},
            address: 'Quorn Cl, Buderim QLD 4556, Australia',
            phone: '',
            website: '',
            notes: ''
        },
        {
            date: '',
            name: 'Noosa National Park',
            coordinates: {lat: -26.382126355033094, lng: 153.0991490827138},
            address: 'Palm Grove Cct, Noosa Heads QLD 4567, Australia',
            phone: '',
            website: '',
            notes: ''
        },
        {
            date: '',
            name: 'Australia Zoo',
            //coordinates: '',
            coordinates: {lat: -26.8238928963215, lng: 152.95713899279284},
            address: 'Beerwah QLD 4519, Australia',
            phone: '',
            website: '',
            notes: ''
        }

        //
    ]
};

// Places with no date are a general list of things to do in the area
// Display date as a header, clicking on a date with display all the places for that date
// Display the destination name as the title. Clicking on the destination will display the destinations
// Have the ability to set priority for each place
// Have the ability to set a place as 'seen'/completed


const datesBetweenStartAndEnd = (start: string, end: string) => {
    const dateArray = [];
    let currentDate = new Date(start);
    const endDate = new Date(end);

    while (currentDate <= endDate) {
        dateArray.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
}

function sameDay(d1: Date, d2: Date): boolean {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

const drawerWidth = 240;



interface ItineraryProps {
    googleNearbyPlaces?: Place[]
}

/*

TODO
Thoughts: Add a 'discover tab' that will show places to visit in the area. This will be a list of places that are not in the itinerary. The user can click on the place to add it to the itinerary.
Display places with an image, name, and rating. Clicking on the place will show more details and the option to add to the itinerary.
Highlight selected day and display the selected date.

 */


function getPlacesBasedOnMode(places: Place[], mode: string) {
    if (mode === 'ALL') return places;
    if (mode === 'UNSCHEDULED') return places.filter(p => p.date === '');
    return places.filter(p => sameDay(new Date(p.date), new Date(mode)));
}


export function UserItinerary({googleNearbyPlaces}: ItineraryProps) {

    console.log('googleNearbyPlaces', googleNearbyPlaces);


    // TODO Will have to replace this with some sort of 'MODE', because when something is added it wont to to add it or not.
    const [places, setPlaces] = React.useState([...itinerary.places]);
    const [itineraryOpen, setItineraryOpen] = React.useState(true);

    const [discoverMode, setDiscoverMode] = useState(false);

    const [placesMode, setPlacesMode] = useState('ALL');

    /*useEffect( () => {
        if (typeof window.google?.maps !== 'undefined') {

            /!*google.maps.importLibrary("places").then( () => {

            });*!/

            setGoogleMapsLoaded(true);

            console.log('Google Maps Loaded')
        }

    }, [window?.google?.maps]);*/


    const unassignedPlaces = itinerary.places.filter(p => p.date === '');


    const onPlaceSelected = (place: any) => {
        console.log('onPlaceSelected', place)

    }

    const updatePlaces = (place: Place | null) => {
        console.log('updatePlaces', place);

        if (!place) return;

        // TODO API call to add.

        places.push(place);

        setPlaces(places);

    }

    const removePlace = (place: any) => {
        console.log('removePlace', place);

        // TODO API call to remove.

        setPlaces(places.filter(p => p !== place));
    }

    //-26.2823482,152.7446725,9.37z
    // -26.382126355033094, 153.0991490827138
    return <Box sx={{padding: 2, marginLeft: drawerWidth + 'px'}}>

        <Typography variant={"h3"} sx={{padding: 3}}>Itinerary</Typography>

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
        >
            <Toolbar/>
            <Box sx={{overflow: 'auto'}}>
                <Typography variant={"h6"} sx={{padding: 1}} onClick={() => setPlaces(itinerary.places)}>
                    {itinerary.destination.title}
                </Typography>
                <Typography variant={"caption"} sx={{padding: 1}}>
                    {itinerary.destination.startDate} - {itinerary.destination.endDate}
                </Typography>

                <ListItemButton>
                    {/* TODO Add a discover mode. Hide the current places. Show map with current places. */}
                    <ListItemText primary={"Discover"} onClick={() => {
                        setPlaces(googleNearbyPlaces || []);
                        setDiscoverMode(true)
                    }} />
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary={"All Places"} onClick={() => setPlaces(itinerary.places)}/>
                </ListItemButton>

                <ListItemButton>
                    <ListItemText primary={"Unscheduled"} onClick={() => setPlaces(unassignedPlaces)}/>
                </ListItemButton>

                <ListItemButton onClick={() => setItineraryOpen(!itineraryOpen)}>
                    <ListItemText primary="Itinerary"/>
                    {itineraryOpen ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>

                <Collapse in={itineraryOpen} timeout="auto" unmountOnExit>
                    <List>
                        {datesBetweenStartAndEnd(itinerary.destination.startDate, itinerary.destination.endDate).map((date, index) => {
                            const placesForDay = itinerary.places.filter(p => sameDay(new Date(p.date), date));
                            console.log('placesForDay', placesForDay);
                            return <ListItem key={date.toDateString()} disablePadding sx={{paddingLeft: 1}}>
                                <ListItemButton>
                                    <ListItemText primary={date.toDateString()}
                                                  onClick={() => setPlaces(placesForDay)}/>
                                </ListItemButton>
                            </ListItem>
                        })}
                        {/* <ListItem key={"unscheduled"} disablePadding>
                            <ListItemButton>
                                <ListItemText primary={"Unscheduled"} onClick={() => setPlaces(unassignedPlaces)}/>
                            </ListItemButton>
                        </ListItem>*/}
                    </List>
                </Collapse>


                <ListItemButton LinkComponent={Link} href={'/user/packing-list'}>
                    <ListItemText primary="Packing List"/>
                </ListItemButton>

            </Box>
        </Drawer>

        {discoverMode && <DiscoverMode googleNearbyPlaces={googleNearbyPlaces}/> }



        {/*<Box>
            <Typography>Weather Forecast?</Typography>
             TODO how can I get a dynamic geoObjectKey?
            <iframe
                src="https://api.wo-cloud.com/content/widget/?geoObjectKey=3444135&language=en&region=US&timeFormat=HH:mm&windUnit=mph&systemOfMeasurement=imperial&temperatureUnit=fahrenheit"
                name="CW2" scrolling="no" width="290" height="318" frameBorder="0"
                style={{border: '1px solid #10658E', borderRadius: "8px"}}></iframe>
        </Box>
*/}
        {/* TODO Option to hide days that have nothing in them */}

        {/* {googleMapsLoaded && <MapsAutoComplete location={null} onPlaceSelected={onPlaceSelected} />}*/}



        {/*<Box sx={{padding: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start'}}>

            <Box sx={{padding: 2}}>
                <Typography variant={"h4"} sx={{padding: 1}} onClick={() => setPlaces(itinerary.places)}>
                    - {itinerary.destination.name}
                </Typography>





                {datesBetweenStartAndEnd(itinerary.destination.startDate, itinerary.destination.endDate).map((date, index) => {
                    // TODO Convert dates with timezone.

                    const placesForDay = itinerary.places.filter(p => sameDay(new Date(p.date), date));

                    return <Box key={index}>
                        <Typography variant={"h6"} sx={{padding: 1}} onClick={() => setPlaces(placesForDay)}>
                            {date.toDateString()}
                        </Typography>
                        <Grid container spacing={1}>
                            {placesForDay.map((place, index) => (
                                <Grid item xs={12} key={index}>
                                    <Box sx={{padding: 1}}>
                                         TODO Add icon on the type of place?
                                        <Typography variant={"h6"} sx={{padding: 1}}>
                                            {place.name}
                                        </Typography>
                                        <Typography variant={"body1"} sx={{padding: 1}}>
                                            {place.address}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                            {placesForDay.length === 0 &&  <Grid item xs={12} key={index}>
                                <Typography sx={{padding: 1}}>Nothing for this day.</Typography>
                            </Grid>}
                        </Grid>
                    </Box>
                })}

                <Typography variant={"h5"} sx={{padding: 1}} onClick={() => setPlaces(unassignedPlaces)}>
                    Unassigned Days
                </Typography>

                <Grid container spacing={1}>
                    {unassignedPlaces.map((place, index) => (
                        <Grid item xs={12} key={index}>
                            <Box sx={{padding: 1}}>
                                <Typography variant={"h6"}>
                                    {place.name}
                                </Typography>
                                <Typography variant={"body1"}>
                                    {place.address}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

            </Box>

            <Box id={'map'} sx={{}}>
                <MapWithMarkers places={places} position={itinerary.destination.coordinates} />
            </Box>

        </Box>*/}

        {/* TODO Maybe display the Map as a "View On Map" button. Just display the places and Suggested Places  */}
        {!discoverMode && <Box id={'map'} sx={{display: 'flex'}}>
            <Box component={"div"} sx={{padding: 3}}>

                <Typography variant={"h5"}>Places</Typography>
                {/* TODO List places */}

                {places?.map((place, index) => {
                    return <Grid container key={index} sx={{padding: 1}}>
                        <Grid item xs={10}>
                            <Typography>{place.name}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button size="small" onClick={() => removePlace(place)}>
                                <RemoveIcon/>
                            </Button>
                        </Grid>

                    </Grid>
                })}

                {/*<PlaceAutocomplete onPlaceSelect={onPlaceSelected} />*/}
                {/*{googleMapsLoaded && <MapsAutoComplete location={null} onPlaceSelected={onPlaceSelected} />}*/}
            </Box>


        </Box>}

        <Box component={"div"}>
            <MapWithMarkers places={places} destination={itinerary.destination} updatePlaces={updatePlaces}/>
        </Box>

    </Box>
}

type PlaceProps = {
    place: Place,
    updatePlaces: (place: Place | null) => void,
    isAdded: boolean,
    removePlace: (place: Place) => void
}

function Place(props: PlaceProps) {
    return <Box sx={{padding: 2, display: 'flex', flexDirection: 'column'}}>

        {/* TODO Add Image */}

        <Typography>{props.place.name}</Typography>


        {/*TODO Add average rating
        TODO Add Phone number*/}

        {!props.isAdded && <Button onClick={() => props.updatePlaces(props.place)}>
            <AddIcon/>
        </Button> }
        {props.isAdded && <Button size="small" onClick={() => props.removePlace(props.place)}>
            <RemoveIcon/>
        </Button>}


    </Box>
}



