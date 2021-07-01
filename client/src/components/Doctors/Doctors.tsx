import { useQuery } from '@apollo/client'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { IDoctor } from '../../assets/Interfaces/Interfaces';
import { GET_ALL_DOCTORS } from '../../http/query/Doctor'
import Doctor from './Doctor';

export default function Doctors() {
    const {data, error, loading} = useQuery(GET_ALL_DOCTORS);
    const [doctors, setDoctors] = useState([])

    useEffect(()=>{
        if(!error) {
            if(!loading) {
                setDoctors(data.getAllDoctors);
            }
        }
    }, [data,loading,error])

    return (
        <>
            {doctors.map((doctor: IDoctor, index: number) => (
                <Doctor key={doctor.id} index={index + 1} doctor={doctor} />
            ))}
        </>
    )
}
