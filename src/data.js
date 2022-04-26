import React from 'react'
import {GrOverview} from 'react-icons/gr';
import { BsCalendarDate} from "react-icons/bs"
import { BsCardList} from "react-icons/bs"
import { BiMessageSquareDots} from "react-icons/bi"
import { MdOutlinePayment} from "react-icons/md"
import {AiFillSetting} from "react-icons/ai"

const sublinks = [
    {
        page: 'overview',
        icon: <GrOverview />,
        path:"/overview"
    },
    {
        page: 'calender',
        icon: <BsCalendarDate />,
        path:"/calender"
    },
    {
        page: 'Patient List',
        icon: < BsCardList />,
        path:"/list"
    },
    {
        page: 'Messages',
        icon: < BiMessageSquareDots />,
        path:"/message"
    },
    {
        page: 'Payment Informations',
        icon: <MdOutlinePayment />,
        path:"/paymentInformation"
    },
    {
        page: 'Settings',
        icon: <AiFillSetting />,
        path:"/settings"
    }
];

export default sublinks;