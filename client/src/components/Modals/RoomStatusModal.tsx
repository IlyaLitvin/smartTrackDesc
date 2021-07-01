import { useMutation, useQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { IRoom } from '../../assets/Interfaces/Interfaces';
import { UPDATE_ROOM } from '../../http/mutations/Room';
import { GET_ALL_ALERTS } from '../../http/query/Alerts';
import Modal from 'react-bootstrap/Modal';

interface IStatusAlert {
  id: number;
  color: string;
  textColor: string;
  name: string;
}

interface IProps {
  show: boolean;
  onHide: () => void;
  status?: IStatusAlert;
  handleChange?: (id: number, status: IStatusAlert) => void;
  room: IRoom;
}

export default function RoomStatusModal({ room, show, onHide }: IProps) {
  const { data, loading, error } = useQuery(GET_ALL_ALERTS);
  const [alerts, setAlerts] = useState([]);
  const [updateRoom] = useMutation(UPDATE_ROOM);

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setAlerts(data.getAllAlerts);
      }
    }
  }, [data, loading, error]);

  return (
    <Modal show={show} centered>
      <Modal.Body>
        <button onClick={onHide}>X</button>
        {alerts.length ? (
          alerts.map((alert, index: number) => <div>{alert}</div>)
        ) : (
          <p>You need create new alert</p>
        )}
      </Modal.Body>
    </Modal>
  );
}
