import React, { useState, useEffect } from 'react';
import StaffNav from '../StaffNav';
import SideBar from '../../../components/SideBar/SideBar';
import { useQuery } from '@apollo/client';
import { IReceptionist } from '../../../assets/Interfaces/Interfaces';
import { GET_ALL_RECEPTIONISTS } from '../../../http/query/Receptionist';
import Receptionist from '../../../components/Receptionist/Receptionist';

export default function ReceptionistsTab() {
  const [receptionists, setReceptionists] = useState([]);
  const { data, error, loading } = useQuery(GET_ALL_RECEPTIONISTS);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setReceptionists(data.getAllReceptionists);
      }
    }
  }, [data, loading, error]);

  return (
    <>
      <SideBar />
      <StaffNav />
      <div>
        {receptionists &&
          receptionists.map((receptionist: IReceptionist, index: number) => (
            <Receptionist
              receptionist={receptionist}
              index={index + 1}
              key={receptionist.id}
            />
          ))}
      </div>
    </>
  );
}
