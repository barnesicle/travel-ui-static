import {Box, Typography} from "@mui/material";
import SocialMedia from "@/app/SocialMedia";
import Link from "next/link";
import {links} from "@/app/links";
import React from "react";
import {appName} from "@/app/app-details";

export function Footer() {
    return <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        alignSelf: "flex-end",
        height: "350px",
        paddingBottom: "20px",
        borderTop: "2px solid #2EF4EF"
    }}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "50%",
            flexWrap: "wrap"
        }}>
            <SocialMedia size={'2x'} light
                         twitter={'https://twitter.com/motivation_adv'}
                         facebook={"https://www.facebook.com/Motivation-Advisor-112735776846201/"}
                         linkedin={"https://www.linkedin.com/company/motivation-advisor"}
            />
        </Box>
        <Typography sx={{paddingTop: "20px"}} color={"inherit"}>
            {details}
        </Typography>
        <Typography id={'footer'} sx={{color: 'white', padding: 2}}>
            <Link href={links.policies.termsOfUse}>Terms and Conditions</Link>
            <PipeSeparator/>
            <Link href={links.policies.privacy}>Privacy</Link>
        </Typography>
    </Box>;
}

function PipeSeparator() {
    return <React.Fragment> | </React.Fragment>;
}

const details = `Copyright © ${new Date().getFullYear()} ${appName()}`;
