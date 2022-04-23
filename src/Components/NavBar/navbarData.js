import React from "react"
import {AiFillHome} from 'react-icons/ai';
import {RiAdminFill} from 'react-icons/ri';
import {AiFillControl} from 'react-icons/ai';
import {DiGoogleAnalytics} from 'react-icons/di';

const iconsClass = 'navbar-icon';

export const navbarData = [

    {

        id: 1,
        name: 'Home',
        path: '/Home/Clusters',
        icon: <AiFillHome className={iconsClass}/>,
        isActive: false,
        isDropdown: false,
        dropdown: []


    },
    {

        id: 2,
        name: 'Admin',
        path: '/Admin',
        icon: <RiAdminFill className={iconsClass}/>,
        isActive: false,
        isDropdown: false,
        dropdown: []


    },
    {

        id: 3,
        name: 'Config',
        path: '/Config',
        icon: <AiFillControl className={iconsClass}/>,
        isActive: false,
        isDropdown: false,
        dropdown: []


    },
    {

        id: 4,
        name: 'Analytics',
        path: '/Analytics',
        icon: <DiGoogleAnalytics className={iconsClass}/>,
        isActive: false,
        isDropdown: false,
        dropdown: []


    },

]