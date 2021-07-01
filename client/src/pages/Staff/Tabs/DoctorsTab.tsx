import React from 'react'
import Doctors from '../../../components/Doctors/Doctors'
import StaffNav from '../StaffNav'
import SideBar from '../../../components/SideBar/SideBar'

export default function DoctorsTab() {
    return (
        <div>
            <SideBar />
            <StaffNav />
            <Doctors />
        </div>
    )
}
