export interface IDoctor {
  id: number;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  rooms?: IRoom[];
}

export interface IDoctorProps {
  doctor: IDoctor;
  index: number;
  docDelete?: (doctorId: number) => void;
  doctorUpdate?: (doctorId: number, doctor: IDoctor) => void;
}

export interface IAssistant {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IAssistantProps {
  assistant: IAssistant;
  index: number;
  assistantDelete?: (assistantId: number) => void;
  assistantUpdate?: (assistantId: number, assistant: IAssistant) => void;
}

export interface IReceptionist {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IReceptionistProps {
  receptionist: IReceptionist;
  index: number;
  receptDelete?: (receptionistId: number) => void;
  receptUpdate?: (receptionistId: number, receptionist: IReceptionist) => void;
}

export interface IRoom {
  id: number;
  name: string;
  timeStatus: string;
  status: {
    id: number;
    name: string;
    color: string;
    textColor: string;
  };
}
