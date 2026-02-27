import Text from '../../atoms/text/Text'
import TaskCardCopyIdButton from '../../atoms/copyIdButton/copyIdButton';
import './task-card-header.scss'

interface TaskCardHeaderProps {
    taskTitle: string
    taskId: string
}

export default function TaskCardHeader({taskTitle, taskId}: TaskCardHeaderProps) {
    return (
        <header className='task-card-header'>
            <Text
                className='task-name'
                as='h1'
                size='md'
                mode='truncate'
                weight='bold'
            >
                {taskTitle}
            </Text>
            <TaskCardCopyIdButton id={taskId}/>
        </header>
    )
}