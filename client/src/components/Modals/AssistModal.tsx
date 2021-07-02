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
  onChange?(text: React.ChangeEvent<HTMLInputElement>): void;
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

  const newAssistant = (
    val: React.ChangeEvent<HTMLInputElement>,
    key: string,
  ): void => {
    setData({
      ...data,
      [key]: val,
    });
  };

  return (
    <Modal show={show} centered>
      <Modal.Body>
        <button onClick={onHide}>X</button>
        <form onSubmit={addAssistant}>
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={assistantData.name}
                onChange={text => newAssistant(text, 'name')}
                required
              />
            </div>
            <div>
              <label htmlFor="email">
                email
                <input
                  type="text"
                  name="email"
                  value={assistantData.email}
                  onChange={text => newAssistant(text, 'email')}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor="phone">
                phone
                <input
                  type="text"
                  name="phone"
                  value={assistantData.phone}
                  onChange={text => newAssistant(text, 'phone')}
                  required
                />
              </label>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
