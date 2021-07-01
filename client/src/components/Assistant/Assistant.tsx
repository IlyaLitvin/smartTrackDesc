import React from 'react';
import {
  IAssistant,
  IAssistantProps,
} from '../../assets/Interfaces/Interfaces';
import sprite from '../../assets/images/sprite.svg';
import AssistModal from '../Modals/AssistModal';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  DELETE_ASSISTANT,
  UPDATE_ASSISTANT,
} from '../../http/mutations/Assistant';
import { GET_ALL_ASSISTANTS } from '../../http/query/Assistant';

export default function Assistant({ assistant, index }: IAssistantProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteAssistant] = useMutation(DELETE_ASSISTANT);
  const [updateAssistant] = useMutation(UPDATE_ASSISTANT);

  const assistantDelete = (id: number) => {
    deleteAssistant({
      variables: { assistantId: id },
      refetchQueries: [{ query: GET_ALL_ASSISTANTS }],
    });
  };

  const assistantUpdate = (id: number, assistant: IAssistant) => {
    const updatedAssistant = {
      name: assistant.name,
      email: assistant.email,
      phone: assistant.phone,
    };
    updateAssistant({
      variables: { assistantId: id, assistantInput: updatedAssistant },
      refetchQueries: [{ query: GET_ALL_ASSISTANTS }],
    });
  };

  return (
    <div key={assistant.id}>
      <div>
        <p>{index}</p>
        <div>
          <p>{assistant.name}</p>
          <p>{assistant.email}</p>
          <p>{assistant.phone}</p>
        </div>
        <div>
          <button type="button">
            <svg width="20" height="20" fill="#6AC7BE">
              <use href={sprite + '#icon-scope'} />
            </svg>
          </button>
          <button type="button" onClick={() => setModalVisible(true)}>
            <svg width="20" height="20" fill="#6AC7BE">
              <use href={sprite + '#icon-edit'} />
            </svg>
          </button>
          <button type="button" onClick={() => assistantDelete(assistant.id)}>
            <svg width="20" height="20" fill="#6AC7BE">
              <use href={sprite + '#icon-trash'} />
            </svg>
          </button>
        </div>
      </div>
      <AssistModal
        assistantUpdate={assistantUpdate}
        assistant={assistant}
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </div>
  );
}
