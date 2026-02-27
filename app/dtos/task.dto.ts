import { ISODateString } from "../types/isoDateString";

export interface MeasurementsDatesDTO {
    _id: string
    date: string;
    measuredPercentage: number
    measuredBy: string
}

export interface StagesDTO {
    _id: string;
    sortIndex: number;
    name: string;
    weight: number;
    weightOnProject: number;
    completionPercentage: number;
    scheduleDate: ISODateString;
    environment: string;
    measurementDates?: MeasurementsDatesDTO[]
}

export interface TowerID {
    _id: string;
    name: string;
    projectId: string;
    createdAt: ISODateString;
    updatedAt: ISODateString
}

export interface TaskDTO {
    _id: string;
    towerId: TowerID;
    sector: string;
    title: string;
    scheduleDate: ISODateString;
    completionDate: string | null;
    statusDate: ISODateString;
    weightOnProject: number;
    completionPercentage: number;
    observation: string;
    done: boolean;
    floorNumber: number;
    stages: StagesDTO[];
}
