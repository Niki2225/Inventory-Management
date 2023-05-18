import React from "react";
import * as BsIcons from "react-icons/bs";


export const SideBarData = [
    {
        title: 'Purchase',
        path:'/purchase',
        icon: <BsIcons.BsFillCartFill />,
        cName: 'nav-text'
    },
    {
        title: 'Sale',
        path:'/sale',
        icon: <BsIcons.BsFillTagsFill />,
        cName: 'nav-text'
    }
];