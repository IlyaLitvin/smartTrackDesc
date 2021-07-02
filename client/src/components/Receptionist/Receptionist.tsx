import React from 'react';
import {
  IReceptionist,
  IReceptionistProps,
} from '../../assets/Interfaces/Interfaces';
import sprite from '../../assets/images/sprite.svg';
import { useState } from 'react';
import RecepModal from '../Modals/RecepModal';
import { useMutation } from '@apollo/client';
import {
  DELETE_RECEPTIONIST,
  UPDATE_RECEPTIONIST,
} from '../../http/mutations/Receptionist';

export default function Receptionist({
  receptionist,
  index,
}: IReceptionistProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [delelteReceptionist] = useMutation(DELETE_RECEPTIONIST);
  const [updateReceptionist] = useMutation(UPDATE_RECEPTIONIST);

  const receptDelete = (id: number) => {};

  const receptUpdate = (id: number, receptionist: IReceptionist) => {};

  return (
    <div key={receptionist.id}>
      <div>
        <p>{index} </p>
      </div>
      <div>
        <p>{receptionist.name}</p>
        <p>{receptionist.email}</p>
        <p>{receptionist.phone}</p>
      </div>
      <div>
        <button type="button" onClick={() => setModalVisible(true)}>
          <svg width="20" height="20" fill="#6AC7BE">
            <use href={sprite + '#icon-edit'} />
          </svg>
        </button>
        <button type="button" onClick={() => receptDelete(receptionist.id)}>
          <svg width="20" height="20" fill="#6AC7BE">
            <use href={sprite + '#icon-trash'} />
          </svg>
        </button>
      </div>
      <RecepModal
        show={modalVisible}
        onHide={() => setModalVisible(false)}
        receptionist={receptionist}
        receptUpdate={receptUpdate}
      />
    </div>
  );
}
