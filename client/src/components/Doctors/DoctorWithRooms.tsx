import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_DOCTORS } from '../../http/query/Doctor';
import { useEffect } from 'react';
import { IDoctor, IRoom } from '../../assets/Interfaces/Interfaces';
import Room from '../Room/Room';

export default function DoctorWithRooms() {
  const { data, loading, error } = useQuery(GET_ALL_DOCTORS);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setDoctors(data.getAllDoctors);
      }
    }
  }, [data, loading, error]);

  return (
    <>
      {doctors.length ? (
        doctors.map((doctor: IDoctor) => (
          <div key={doctor.id}>
            <div>
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <button>Reset</button>
            </div>
            <div>
              <button>-</button>
              <button>5</button>
              <button>+</button>
              <button>in line</button>
              <button>stop the line</button>
            </div>
            <div>
              {doctor.rooms &&
                doctor.rooms.map((room: IRoom) => (
                  <Room key={room.id} room={room} />
                ))}
            </div>
          </div>
        ))
      ) : (
        <div>No available doctors yet</div>
      )}
    </>
  );
}
