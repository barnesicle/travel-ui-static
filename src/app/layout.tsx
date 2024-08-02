import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AppBar, Box, Button, ThemeProvider, Toolbar, Typography} from "@mui/material";
import Link from "next/link";
import {links} from "./links";
import React from "react";
import SocialMedia from "./SocialMedia";
import {appName} from "./app-details";
import {getConfig} from "./config";
//import history from "@/app/utils/history";
import {Auth0Provider} from "@auth0/auth0-react";
import Main from "@/app/Main";


const inter = Inter({ subsets: ["latin"] });

/*export const metadata: Metadata = {
  title: 'Social DOING | Motivation Advisor',
  description: 'Motivation Advisor is a platform for DOING things.'
};*/



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <>
      <html lang="en">
      <body className={inter.className}>
      <Main >
        {children}
      </Main>
      </body>
      </html>
    </>
  );
}


