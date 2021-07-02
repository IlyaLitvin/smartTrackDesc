import React, { useState, useEffect } from 'react';
import StaffNav from '../StaffNav';
import SideBar from '../../../components/SideBar/SideBar';
import Assistant from '../../../components/Assistant/Assistant';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_ASSISTANTS } from '../../../http/query/Assistant';
import { IAssistant } from '../../../assets/Interfaces/Interfaces';
import AssistModal from '../../../components/Modals/AssistModal';
import { CREATE_ASSISTANT } from '../../../http/mutations/Assistant';

export default function AssistantsTab() {
  const [assistants, setAssistants] = useState([]);
  const { data, error, loading } = useQuery(GET_ALL_ASSISTANTS);
  const [modalVisible, setModalVisible] = useState(false);
  const [newAssistant] = useMutation(CREATE_ASSISTANT, {
    refetchQueries: [{ query: GET_ALL_ASSISTANTS }],
  });

  const saveAssistant = (item: IAssistant) => {
    newAssistant({
      variables: {
        assistant: item,
      },
    });
  };

  useEffect(() => {
    if (!error) {
      if (!loading) {
        setAssistants(data.getAllAssistants);
      }
    }
  }, [data, loading, error]);

  return (
    <>
      <SideBar />
      <StaffNav />
      <div>
        <button type="button" onClick={() => setModalVisible(true)}>
          Add new
        </button>
        {assistants &&
          assistants.map((assistant: IAssistant, index: number) => (
            <Assistant
              assistant={assistant}
              index={index + 1}
              key={assistant.id}
            />
          ))}
      </div>
      <AssistModal
        saveAssistant={saveAssistant}
        show={modalVisible}
        onHide={() => setModalVisible(false)}
      />
    </>
  );
}
