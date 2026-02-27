import Image from 'next/image';
import Text from '../../atoms/text/Text';
import './task-observation.scss'

interface TaskObservationProps {
    observation?: string
    mode: 'create' | 'view'
    onClick: () => void
}

export default function TaskObservation({observation, mode, onClick}: TaskObservationProps) {

    const crateObservationTaskIcon = '/create-observation-icon-18x18.svg'
    const viewObservationTaskIcon = '/view-observation-icon-18x18.svg'

    return (
        <div className='task-observation-container'>
            {/* TODO - Ver como posso lidar com spread operator */}
            <Text weight='regular' size='xs' as='h1' mode='truncate'>
                { mode == 'create' ? 'Criar nova observação' : observation }
            </Text>

            {
                mode == 'view' ? (
                    <Image
                        src= {viewObservationTaskIcon}
                        alt='Icone de expandir para ver a observação da tarefa'
                        width={18}
                        height={18}
                        onClick={onClick}
                    />
                ) : (
                    <Image
                        src= {crateObservationTaskIcon}
                        alt='Icone de criar nova observação para a tarefa'
                        width={18}
                        height={18}
                        onClick={onClick}
                    />
                )
            }

        </div>
    )
}