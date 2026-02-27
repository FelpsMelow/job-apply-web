"use client";

import { InstructionsPanelContent } from "../../refatorar/instructions-panel-content";
import { useMemo, useState } from "react";
import { HomeTemplateProps } from "@/app/types/homeTemplate.type";
import { postTaskFactory } from "@/app/services/microservice/taskFactory";
import { IngestFileData } from "@/app/services/microservice/types/ingestFile.types";
import { sendInBatches } from "@/app/utils/sendBatchs";
import { deleteTasksByProjectId, postManyTasks } from "@/app/services/api/task.service";
import { ingestFile } from "@/app/services/microservice/ingestFile";
import { useSideBar } from "@/app/contexts/sideBar.context";
import { Stepper } from "../../molecules/stepper/stepper/Stepper";
import { useUser } from "@/app/contexts/user.context";
import { useTask } from "@/app/contexts/task.context";
import { TaskDTO } from "@/app/dtos/task.dto";
import { Alert } from "../../organisms/alerts/Alerts";
import PreviewStepSection from "../../organisms/previewStepSection/PreviewStepSection";
import SendProgressCard from "../../refatorar/sendProgressCard/SendProgressCardSendProgressCard";
import TasksUploadCard from "../../organisms/tasksUploadCard/TasksUploadCard";
import TaskCard from "../../organisms/taskCard/TaskCard";
import Overlay from "../../atoms/overlay/Overlay";
import Button from "../../atoms/button/Button";
import clsx from "clsx";
import "./home-template.scss";

export default function HomeTemplate({}: HomeTemplateProps) {

    const steps = useMemo(
        () => [
            { id: "select", label: "Seleção e Upload" },
            { id: "preview", label: "Pré-visualização" },
            { id: "process", label: "Processamento" },
        ],
        []
    );

    const [activeStep, setActiveStep] = useState(0);
    const [maxStepReached, setMaxStepReached] = useState(0);
    const [file, setFile] = useState<File | null>(null);
    const [isIngestFile, setIsIngestFile] = useState<boolean>(false)
    const [dataFile, setDataFile] = useState<Array<IngestFileData>>()
    const [sendProgress, setSendProgress] = useState(false)
    
    const { sideBarSelectedOptions } = useSideBar()
    const {tasks, setTasksState} = useTask()
    const {setUser} = useUser()
    
    const user = useUser()

    const homePreview = clsx('home-preview-file-content', `home-preview-file-content${activeStep == 2 && '--colapsed'}`)
    const homePreviewUploadTasks = clsx('home-upload-tasks-container', `home-upload-tasks-container${activeStep == 2 && '--expanded'}`)
    const canGoNext = Boolean(file && sideBarSelectedOptions.construction != "" && sideBarSelectedOptions.constructionCompanies != "" && isIngestFile);
    
    function goToStep(index: number) {
        if (index <= maxStepReached) setActiveStep(index);
    }

    const [isSending, setIsSending] = useState(false);
    const [currentBatch, setCurrentBatch] = useState(0);
    const [totalBatches, setTotalBatches] = useState(0);


    function nextStep() {
        if (activeStep == 0) {
            setUser({isLoading: true})
            postTaskFactory(dataFile!).then((res) => {
                setTasksState(res)
                setUser({isLoading: false})
            })
        } else if (activeStep == 1) {
            uploadTasks(tasks)
        } else {
            window.location.reload()
        }

        setActiveStep((current) => {
            const next = Math.min(current + 1, steps.length - 1);
            setMaxStepReached((m) => Math.max(m, next));
            return next;
        });
    }

    function previousStep() {
        setActiveStep((current) => Math.max(current - 1, 0));
    }

    function handleIngestFile (file: File) {
        setUser({isLoading: true})
        ingestFile(file!).then((res) => {
            if (res.ok) {
                setIsIngestFile(true)
                Alert({type: "success", message: "Arquivo lido com sucesso!"})
                setDataFile(res.data)
                setUser({isLoading: false})
            } else {
                Alert({type: "error", message: "Erro ao ler arquivo"})
                setUser({isLoading: false})
            }
        })
    }

    async function uploadTasks(tasks: TaskDTO[]) {
        const projectId = sideBarSelectedOptions.construction
        await deleteTasksByProjectId(projectId!)
        setIsSending(true);
        setCurrentBatch(0);
        setTotalBatches(Math.ceil(tasks.length / 50));

        const summary = await sendInBatches({
            items: tasks,
            batchSize: 50,
            delayMsBetweenBatches: 500,
            onProgress: (p) => {
                setCurrentBatch(p.batchNumber);
                setTotalBatches(p.totalBatches);
            },
            request: async (mappedBatch) => {
                const response = await postManyTasks(mappedBatch);
                return { status: response.status, statusText: response.statusText, data: response.data };
            },
        });

        setIsSending(false);
        setSendProgress(true);
        return summary;
    }

    return (
        <div className="home">
            <Overlay isVisible={user.isLoading} onClick={() => false}/>
            <div className="home-content">
                <div className={homePreviewUploadTasks}>
                    <Stepper
                        steps={steps}
                        activeStep={activeStep}
                        maxStepReached={maxStepReached}
                        onStepChange={goToStep}
                        status={sendProgress == true ? ['done', 'done', 'done'] : []}
                    />

                    {activeStep == 0 || activeStep == 1 ? (
                        <TasksUploadCard
                            onClickBtnUploadCard={() => handleIngestFile(file!)}
                            onSelectedFile={(f) => setFile(f)}
                            status={file ? true : false}
                        />
                    ): null}

                    {activeStep === 2 && (
                        <SendProgressCard
                            totalTasks={tasks.length}
                            batchSize={50}
                            currentBatch={currentBatch}
                            totalBatches={totalBatches}
                            isSending={isSending}
                        />
                    )}

                    <div className={`home-buttons-navigation ${ activeStep == 2 && 'home-buttons-navigation-2'}`}>
                        <Button
                            variant="secondary"
                            onClick={previousStep}
                            disabled={activeStep === 0}
                        >
                            Voltar
                        </Button>
                        <Button
                            variant="success"
                            onClick={nextStep}
                            disabled={!canGoNext}
                        >
                            {
                                activeStep == 0 ? 'Pré-visualizar tarefas' : activeStep == 1 ? 'Processar tarefas' : 'Subir novas tarefas'
                            }
                        </Button>
                    </div>
                </div>
                <div className={homePreview}>

                    {
                        activeStep == 0 && (
                            
                            dataFile && activeStep == 0 ? (
                                <PreviewStepSection
                                    data={dataFile.slice(0, 50)}
                                    totalRows={dataFile.length}
                                    showing={Math.min(50, dataFile.length)}
                                    validRows={dataFile.length}
                                />
                            ) : (
                                <InstructionsPanelContent/>
                            )
                            
                        )
                    }

                    {
                        activeStep == 1 && (
                            <div className="home-preview-tasks">
                                {
                                    tasks.map((task) => (
                                        <TaskCard key={task._id} task={task} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
