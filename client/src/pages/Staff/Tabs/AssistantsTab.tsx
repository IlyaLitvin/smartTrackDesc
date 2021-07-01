
import React, { useState, useEffect } from 'react'
import StaffNav from '../StaffNav'
import SideBar from '../../../components/SideBar/SideBar'
import Assistant from '../../../components/Assistant/Assistant'
import { useQuery } from '@apollo/client';
import { GET_ALL_ASSISTANTS } from '../../../http/query/Assistant';
import { IAssistant } from '../../../assets/Interfaces/Interfaces';

export default function AssistantsTab() {
    const [assistants, setAssistants] = useState([]);
    const {data, error, loading} = useQuery(GET_ALL_ASSISTANTS);

    useEffect(()=> {
      if(!error) {
        if(!loading) {
          setAssistants(data.getAllAssistants);
        }
      }
    }, [data, loading, error])

    return (
        <>
            <SideBar />
            <StaffNav />
            <div>
             {assistants && assistants.map((assistant: IAssistant, index: number) => <Assistant assistant={assistant} index={index+1} key={assistant.id} />)}
            </div>
        </>
    )
}
