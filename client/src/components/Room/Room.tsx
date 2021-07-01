import React from 'react';
import { useState } from 'react';
import { IRoom } from '../../assets/Interfaces/Interfaces';
import RoomStatusModal from '../Modals/RoomStatusModal';

export default function Rooms({ room }: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div key={room.id}>
      <div>
        <div></div>
        <p>{room.name}</p>
        <p>R</p>
        <p>{room.timeStatus}</p>
      </div>
      <div>
        <button onClick={() => setModalVisible(true)}>Status</button>
      </div>
      <RoomStatusModal
        room={room}
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}
