import { TaskDTO, StagesDTO } from "@/app/dtos/task.dto";

const baseStages: StagesDTO[] = [
  {
    _id: "stage-1",
    sortIndex: 0,
    name: "Escavação Mecânica",
    weight: 30,
    weightOnProject: 0.02,
    completionPercentage: 35,
    scheduleDate: "2024-07-01T00:00:00.000Z",
    environment: "Fundação",
    measurementDates: [],
  },
  {
    _id: "stage-2",
    sortIndex: 1,
    name: "Locação da Obra",
    weight: 25,
    weightOnProject: 0.01,
    completionPercentage: 10,
    scheduleDate: "2024-08-01T00:00:00.000Z",
    environment: "Fundação",
    measurementDates: [],
  },
  {
    _id: "stage-3",
    sortIndex: 2,
    name: "Drenagem e Esgoto",
    weight: 45,
    weightOnProject: 0.03,
    completionPercentage: 5,
    scheduleDate: "2024-09-01T00:00:00.000Z",
    environment: "Fundação",
    measurementDates: [],
  },
];

export const sampleStages: StagesDTO[] = baseStages;

export const sampleTask: TaskDTO = {
  _id: "task-1",
  towerId: {
    _id: "tower-1",
    name: "Torre 1",
    projectId: "project-1",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z",
  },
  sector: "Fundação",
  title: "Preparo do Terreno",
  scheduleDate: "2024-07-01T00:00:00.000Z",
  completionDate: null,
  statusDate: "2024-08-01T00:00:00.000Z",
  weightOnProject: 0,
  completionPercentage: 22,
  observation: "Aguardando liberação de orçamento.",
  done: false,
  floorNumber: 0,
  stages: baseStages,
};

export const nearDueTask: TaskDTO = {
  ...sampleTask,
  _id: "task-2",
  title: "Fundação Torre 2",
  completionPercentage: 55,
  scheduleDate: "2024-05-01T00:00:00.000Z",
  observation: "",
};

export const completedTask: TaskDTO = {
  ...sampleTask,
  _id: "task-3",
  title: "Cobertura Torre 3",
  completionPercentage: 100,
  done: true,
  observation: "Entrega homologada.",
  stages: sampleStages.map((stage) => ({ ...stage, completionPercentage: 100 })),
};
