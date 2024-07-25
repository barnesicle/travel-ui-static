import React from 'react';
import {Box} from "@mui/material";
import { SocialIcon } from 'react-social-icons';
import 'react-social-icons/vimeo';
import 'react-social-icons/meetup';

const SocialMedia = (props: any) => {

    const sites = [
        'facebook',
        'twitter',
        'google-plus',
        'linkedin',
        'instagram',
        'pinterest'
    ];

    const size = props.size || '2x';
    const color = props.light ? 'social-media-light' :  'social-media-dark';

    return <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {sites.map( site => {
            const prop = props[site];
            if (prop) {
                return (
                    <Box key={site} sx={{padding: 1}}>
                        <SocialIcon
                            target="_blank"
                            url={prop}
                        />
                    </Box>
                );
            }
        })
        }
    </Box>;
};

export default SocialMedia;


