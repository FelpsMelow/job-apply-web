import { useState } from 'react';
import ProgressBar from '../../molecules/progressBar/ProgressBar';
import TaskCardHeader from '../../molecules/taskCardHeader/TaskCardHeader'
import Term from '../../molecules/term/Term';
import Button from '../../atoms/button/Button';
import TaskSteps from '../../molecules/taskSteps/TaskSteps';
import TaskObservation from '../../molecules/taskObservation/TaskObservation';
import Divider from '../../atoms/divider/Divider';
import LabelWithArrow from '../../molecules/labelWithArrow/LabelWithArrow';
import { TaskDTO } from '@/app/dtos/task.dto';
import './task-card.scss'
import { formatISOToBRDate } from '../../../utils/date/formatISOToBRDate';

interface TaskCardProps {
    task: TaskDTO
}

export default function TaskCard({task}: TaskCardProps) {

    const [isCollapsedListSteps, setIsCollapsedListSteps] = useState<boolean>(true)

    return (
        <section
            className='task-card-container'
        >
            <TaskCardHeader
                taskTitle={task.title}
                taskId={task._id}
            />
            <ProgressBar
                variant='task'
                percentage={Math.round(task.completionPercentage)}
            />
            <div className='term-measure-container'>
                <Term dateSchedule={formatISOToBRDate(task.scheduleDate)}/>
                <Button
                    className='measure-button'
                    size='sm'
                    onClick={() => setIsCollapsedListSteps(!isCollapsedListSteps)}
                >
                    <LabelWithArrow
                        text={isCollapsedListSteps ? 'Medir etapas' : 'Fechar'}
                        isCollapsed={isCollapsedListSteps}
                    />
                </Button>
            </div>
            <TaskSteps taskId={task._id} steps={task.stages} isCollapsed={isCollapsedListSteps}/>
            {
                isCollapsedListSteps && <Divider/>
            }
            <TaskObservation
                observation={task.observation}
                mode={task.observation == '' ? 'create' : 'view'}
                onClick={() => alert(task.observation)}
            />
        </section>
    )

}