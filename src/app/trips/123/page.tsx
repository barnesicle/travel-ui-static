import React from 'react';

import {Box, Typography, Container, Grid} from '@mui/material';
import {getBaseImageURLKey} from "@/app/paths";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: 'About | Motivation Advisor',
    description: 'Motivation Advisor is a platform for DOING things.'
};

type Props = {
}

// *** Before Booking
// Book flights
// Create a rough itinerary
// Create a budget

// *** After Booking
// Crate a packing list
// Book flights
// Book accommodation
// Book activities
// Create itinerary
// Vaccinations


// -----------------------

// *** Booking ***
// Book flights
// Book accommodation
// Book activities
// Book travel insurance

// *** Planning ***
// Create a budget
// Create itinerary
// Get Vaccinations
// Create a packing list

// Managing small children (if applicable)

// *** Before Trip ***
// Pack and weigh bags
// Check weather

// *** Reflection ***
// Reflect on trip

type DashboardOption = {
    title: string
    code: string,
    onClick?: () => void
}

type UserOption = {
    code: string
    status: string
}

const bookingOptions : DashboardOption[] = [
    {
        code: 'flights',
        title: 'Flights',
        onClick: () => {

        }
    },
    {
        code: 'rental-car',
        title: 'Rental Car',
        onClick: () => {

        }
    },
    {
        code: 'accommodation',
        title: 'Accommodation',
        onClick: () => {

        }
    },
    {
        code: 'activities',
        title: 'Activities',
        onClick: () => {

        }
    },
    {
        code: 'insurance',
        title: 'Travel Insurance',
        onClick: () => {

        }
    },
];

// TODO Add the ability to hide options

const planningOptions : DashboardOption[] = [
    {
        code: 'budget',
        title: 'Budget',
        onClick: () => {

        }
    },
    {
        code: 'itinerary',
        title: 'Itinerary',
        onClick: () => {

        }
    },
    {
        code: 'vaccinations',
        title: 'Vaccinations', // TODO conditional - if travelling internationally.
        onClick: () => {

        }
    },
    {
        code: 'packing-list',
        title: 'Packing List',
        onClick: () => {

        }
    },
    {
        code: 'visa',
        title: 'Visa', // TODO conditional - if travelling internationally.
        onClick: () => {

        }
    },
    {
        code: 'ask-ai',
        title: 'Ask AI', // TODO Premium feature
        onClick: () => {

        }
    },
];

const reflectingOptions : DashboardOption[] = [
    {
        code: 'reflect',
        title: 'Reflect',
    },
    {
        code: 'share',
        title: 'Share',
    }
];

export default function AboutUsPage (props: Props) {


        const paddingSx = {
            padding: 1
        };


        const userOptions : UserOption[] = [
            {
                code: 'flights',
                status: 'COMPLETE'
            }
        ]

        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                width: '100%',
            }}>

                <Box sx={{padding: 2}}>

                    <Typography variant={"h3"} sx={{padding: 3}}>Dashboard</Typography>

                    <Box sx={{padding: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

                        <Box sx={{padding: 2}}>
                            <Typography variant={"h4"} sx={paddingSx}>
                                Booking
                            </Typography>
                            <DashboardOption options={bookingOptions} userOptions={userOptions} />
                        </Box>


                        <Box sx={{padding: 2}}>
                            <Typography variant={"h4"} sx={paddingSx}>
                                Planning
                            </Typography>
                            <DashboardOption options={planningOptions} userOptions={userOptions} />
                        </Box>


                        <Box sx={{padding: 2}}>
                            <Typography variant={"h4"} sx={paddingSx}>
                                Reflecting
                            </Typography>
                            <DashboardOption options={reflectingOptions} userOptions={userOptions} />
                        </Box>

                    </Box>



                </Box>

            </Box>
        );

}

// TODO Component that displays a location input and then a plus button, user can add multiple locations
export function LocationSelector() {

}


// TODO Component that allows a user to enter in a generic list, name it, and then add items to it.
export function UserList() {
    return <Box>




    </Box>
}



type DashboardOptionProps = {
    options: DashboardOption[],
    userOptions: UserOption[],
    defaultColor?: string,
}

export function DashboardOption(props: DashboardOptionProps) {

    return props.options.map( (option) => {

        const currentUserOptions = props.userOptions.find( (userOption) => userOption.code === option.code);

        const color = currentUserOptions?.status === 'COMPLETE' ? '#4caf50' : 'primary.main';

        const styles = {
            width: 300,
            height: 100,
            position: 'relative',
            backgroundColor: color,
            '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: 0,
                height: 0,
                borderLeft: '50px solid white',
                borderTop: '50px solid transparent',
                borderBottom: '50px solid transparent',
            },
            '&::before': {
                content: '""',
                position: 'absolute',
                right: -50,
                bottom: 0,
                width: 0,
                height: 0,
                borderLeft: '50px solid ' + color,
                borderTop: '50px solid transparent',
                borderBottom: '50px solid transparent',
            },
        };



        return <Box key={option.title} sx={{ margin: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', ...styles }} component={"div"}>
                <Typography color={"white"} sx={{ paddingLeft: 2 }}>{option.title}</Typography>
                {/* TODO Add menu items to ignore, mark complete */}
            </Box>
        });
}
