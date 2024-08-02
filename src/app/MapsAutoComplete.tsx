import {usePlacesWidget} from "react-google-autocomplete";
import React from "react";
import { TextField } from '@mui/material';

function isDefined(o: any) {
    return typeof o !== 'undefined' && o !== null;
}


type MapsAutoCompleteProps = {
    location: GooglePlace | null
    onPlaceSelected(place: GooglePlace) : void
}


export interface GooglePlace {
    name: string,
    formatted_address: string,
    place_id: string,
    types: string[]
}

export function MapsAutoComplete(props: MapsAutoCompleteProps) {

    const {ref: materialRef} = usePlacesWidget({
        // @ts-ignore
        apiKey: 'AIzaSyD07ghI7JVp17zPEURbCnLM7PEpVaFabIw', // TODO
        onPlaceSelected: props.onPlaceSelected,
        //inputAutocompleteValue: "country",
        options: {
            types: [],
            //componentRestrictions: {country},
            fields: [
                "type",
                "name",
                "address_components",
                "geometry.location",
                "place_id",
                "formatted_address",
            ]
        },
    });

    const location = isDefined(props.location) ? props.location?.formatted_address : '';

    console.log('MAPS props.location', props.location)

    return <TextField
        id={"maps-auto-complete"}
        fullWidth
        inputProps={
            {'data-value': location, 'data-state': location}
        }
        color="secondary"
        variant="outlined"
        inputRef={materialRef}
    />
}