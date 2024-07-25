import React from 'react';

import {Box, Typography, Container, Grid} from '@mui/material';
import type {Metadata} from "next";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import {GOOGLE_PUBLIC_API_KEY, UserItinerary} from "@/app/trips/123/itinerary/Itinerary";
import {Place} from "@/app/trips/123/itinerary/types";


export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};

type Props = {
}

/*
Example:

{
    "geometry": {
        "location": {
            "lat": -26.65,
            "lng": 153.066667
        },
        "viewport": {
            "northeast": {
                "lat": -26.35962286591801,
                "lng": 153.1513939349979
            },
            "southwest": {
                "lat": -26.85334205959798,
                "lng": 152.9969196332883
            }
        }
    },
    "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
    "icon_background_color": "#7B9EB0",
    "icon_mask_base_uri": "https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet",
    "name": "Sunshine Coast",
    "photos": [
        {
            "height": 600,
            "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/106608143363528498453\">Lee Heard</a>"
            ],
            "photo_reference": "AelY_CvbhagqlP7n5mClIPVhwwWRmt3lyfamvLQi2sMTwr7JN9pVaqFpwa9T4_XF3Ie2iNux_rT2RP16MqV75rnS4oidTfk4HhcYLLzXtTrdy00_iwbezRbJTt7ZQ0uSjKH1Zn1mfHqKx9KBsM4tQ-VjIdIBxBN5XDqH6EXdsuHtxawujHlK",
            "width": 900
        }
    ],
    "place_id": "ChIJ7Uh9bbZ_k2sRUK_e81qjAgM",
    "reference": "ChIJ7Uh9bbZ_k2sRUK_e81qjAgM",
    "scope": "GOOGLE",
    "types": [
        "colloquial_area",
        "locality",
        "political"
    ],
    "vicinity": "Sunshine Coast"
}

* */

// For OLD API
/*export type GoogleNearbyPlaces = {
    next_page_token: string,
    results: {
        geometry: {
            location: {
                lat: number,
                lng: number
            }
        }
        name: string,
        types: string[],
        business_status: string,
        vicinity: string,
        place_id: string
        rating: number
        user_ratings_total: number,
        photos: {
            height: number,
            html_attributions: string[],
            photo_reference: string,
            width: number
        }[],

    }[]
}*/

export type GooglePlace = {
    id: string,
    name: string,
    location: {
        latitude: number,
        longitude: number
    }
}

export type GoogleNearbyPlaces = {
    places: GooglePlace[]
}



export default async function Page (props: Props) {

    const destination = {lat: -26.382126355033094, lng: 153.0991490827138}

    // https://developers.google.com/maps/documentation/places/web-service/supported_types
    // Types: zoo,

    // TODO Limit place types
    // TODO Only fetch on the 'discover' route.
    // TODO How do I get the next 20?
    function getPlaces() : Promise<Place[]> {
       /* return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=3000&location=${destination.lat},${destination.lng}&key=${GOOGLE_PUBLIC_API_KEY}`, {

            }).then(async response => {
            return await response.json();
        }).catch((error) => {
            console.error('Error fetching nearby places', error);
            return [];
        });*/



        // https://developers.google.com/maps/documentation/places/web-service/nearby-search
        return fetch(`https://places.googleapis.com/v1/places:searchNearby`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.id,places.location', // TODO Change to specify fields needed.
                'X-Goog-Api-Key': GOOGLE_PUBLIC_API_KEY
            },
            body: JSON.stringify({
                "includedPrimaryTypes": [
                    "art_gallery",
                    "museum",
                    "amusement_center",
                    "amusement_park",
                    "aquarium",
                    "banquet_hall",
                    "bowling_alley",
                    "casino",
                    "art_gallery",
                    "museum",
                    "hiking_area",
                    "historical_landmark",
                    "marina",
                    "movie_rental",
                    "movie_theater",
                    "national_park",
                    "night_club",
                    "park",
                    "tourist_attraction",
                    "visitor_center",
                    "zoo",
                    "cafe",
                    "restaurant"], //["food", "landmark", "point_of_interest", "natural_feature"],
                "maxResultCount": 20,
                "locationRestriction": {
                    "circle": {
                        "center": {
                            "latitude": destination.lat,
                            "longitude": destination.lng
                        },
                        "radius": 1000.0
                    }
                }
            })
        }).then(async response => {
            return await response.json();
        }).then((res: GoogleNearbyPlaces) : Place[] => {
            return res.places?.map((place: GooglePlace ) => {
                return {
                    date: '',
                    placeId: place.id,
                    name: place.name,
                    coordinates: {
                        lat: place.location.latitude,
                        lng: place.location.longitude
                    },
                    photos: [],
                    rating: 0,
                    types: [],
                    notes: '',
                    website: '',
                    phone: '',
                    address: '',

                }
            }) || [];
        }).catch((error) => {
            console.error('Error fetching nearby places', error);
            return [];
        });
    }

    const places : Place[] = []; //await getPlaces();

    console.log('places', places);

    return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '100%',
            }}>

                <UserItinerary googleNearbyPlaces={places} />

            </Box>
        );

}


