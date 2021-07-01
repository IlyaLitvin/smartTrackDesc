import React from 'react'
import { useParams } from 'react-router';

export default function AssistantsTab() {
    let { topicId }: any = useParams();

    return (
      <div>
        <h3>hello world</h3>
      </div>
    );
}