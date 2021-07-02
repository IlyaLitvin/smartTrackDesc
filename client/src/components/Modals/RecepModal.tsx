import React, { useState } from 'react';
import { IReceptionist } from '../../assets/Interfaces/Interfaces';
import Modal from 'react-bootstrap/Modal';

interface IProps {
  show: boolean;
  onHide: () => void;
  receptUpdate?: (dataId: number, data: IReceptionist) => void;
  saveReceptionist?: (data: IReceptionist) => void;
  receptionist?: IReceptionist;
}

const receptData = {
  id: 0,
  name: '',
  email: '',
  phone: '',
};

export default function RecepModal({
  show,
  onHide,
  receptionist,
  receptUpdate,
}: IProps) {
  const [data, setData] = useState(receptionist || receptData);

  return (
    <Modal show={show} centered>
      <Modal.Body>
        <button onClick={onHide}>X</button>
      </Modal.Body>
    </Modal>
  );
}
