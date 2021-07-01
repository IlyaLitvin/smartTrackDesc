import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { IAssistant } from '../../assets/Interfaces/Interfaces';

interface IProps {
  show: boolean;
  onHide: () => void;
  assistantUpdate?: (dataId: number, data: IAssistant) => void;
  saveAssistant?: (data: IAssistant) => void;
  assistant?: IAssistant;
}

const assistantData = {
  id: 0,
  name: '',
  email: '',
  phone: '',
};

export default function AssistModal({
  show,
  onHide,
  assistantUpdate,
  assistant,
  saveAssistant,
}: IProps) {
  const [data, setData] = useState(assistant || assistantData);

  const addAssistant = () => {
    if (assistant) {
      assistantUpdate && assistantUpdate(data.id, data);
    } else {
      saveAssistant && saveAssistant(data);
      setData(assistantData);
    }
    onHide();
  };

  const newAssistant = (val: string, key: string): void => {
    setData({
      ...data,
      [key]: val,
    });
  };

  return (
    <Modal show={show} centered>
      <Modal.Body>
        <button onClick={onHide}>X</button>
      </Modal.Body>
    </Modal>
  );
}
