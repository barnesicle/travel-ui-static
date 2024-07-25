import React, {useEffect, useRef, useState} from "react";
import {useMapsLibrary} from "@vis.gl/react-google-maps";
import {Box, TextField} from "@mui/material";
import {Coordinates} from "@/app/trips/123/itinerary/types";

interface PlaceAutocompleteProps {
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const PlaceAutocomplete = (props: {
    position: Coordinates,
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void
}) => {
    const [placeAutocomplete, setPlaceAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const defaultBounds = {
            north: props.position.lat + 0.3,
            south: props.position.lat - 0.3,
            east: props.position.lng + 0.3,
            west: props.position.lng - 0.3,
        };

        // TODO Restrict to country
        const options = {
            bounds: defaultBounds,
            strictBounds: false,
            fields: ['geometry', 'name', 'formatted_address'],
            //types: ['night_club', 'mosque', 'lodging', 'aquarium', 'art_gallery', 'amusement_park', 'bar', 'beauty_salon', 'book_store', 'bowling_alley', 'cafe', 'campground', 'casino', 'church', 'city_hall', 'clothing_store', 'convenience_store', 'department_store', 'electronics_store', 'florist', 'furniture_store', 'gas_station', 'gym', 'hair_care', 'hardware_store', 'home_goods_store', 'jewelry_store', 'laundry', 'library', 'liquor_store', 'meal_delivery', 'meal_takeaway', 'movie_rental', 'movie_theater', 'museum', 'night_club', 'park', 'pet_store', 'pharmacy', 'restaurant', 'shoe_store', 'shopping_mall', 'spa', 'stadium', 'store', 'subway_station', 'supermarket', 'synagogue', 'taxi_stand', 'train_station', 'transit_station', 'travel_agency', 'university', 'veterinary_care', 'zoo']
        };

        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
    }, [places]);

    useEffect(() => {
        if (!placeAutocomplete) return;

        placeAutocomplete.addListener('place_changed', () => {
            props.onPlaceSelect(placeAutocomplete.getPlace());
        });
    }, [props.onPlaceSelect, placeAutocomplete]);

    return (
        <Box sx={{padding: 3}}>
            <TextField variant={"standard"} inputRef={inputRef}
                       sx={{width: '300px', backgroundColor: 'white', padding: 1}}/>
        </Box>
    );
};