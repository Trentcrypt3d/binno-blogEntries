import React from 'react';
import WebRoundedIcon from '@mui/icons-material/WebRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';


export const SideBarData = [
    {
        title: "Dashboard",
        icon:  <WebRoundedIcon />,
        link:   "/Dashboard"
    },
    {
        title: "Programs",
        icon:  <SpaceDashboardRoundedIcon />,
        link:   "/Programs"
    },
    {
        title: "Blog Entries",
        icon:  <NewspaperRoundedIcon />,
        link:   "/BlogEntries"
    },
    {
        title: "Account",
        icon:  <PersonRoundedIcon />,
        link:   "/Account"
    },
]
