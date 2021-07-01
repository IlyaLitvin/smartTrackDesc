import React from 'react'
import { IDoctorProps } from '../../assets/Interfaces/Interfaces'
import sprite from '../../assets/images/sprite.svg'
import DocModal from '../Modals/DocModal'

export default function Doctor({doctor, index}: IDoctorProps) {
    return (
        <div>
            <div>
             <p>{index}</p>
            </div>
            <div>
                <p>{doctor.name}</p>
                <p>{doctor.email}</p>
                <p>{doctor.phone}</p>
                <div>
                    <p>Rooms</p>
                    <div>
                        {doctor.rooms && doctor.rooms.map(room => room.name + "")}
                    </div>
                </div>
                <div>
                    <button type="button">
                        <svg width="20" height="20" fill="#6AC7BE">
                            <use href={sprite + '#icon-edit'} />
                        </svg>
                    </button>
                    <button type="button">
                        <svg width="20" height="20" fill="#6AC7BE">
                            <use href={sprite + '#icon-trash'} />
                        </svg>
                    </button>
                </div>
            </div>
            <DocModal />
        </div>
    )
}
