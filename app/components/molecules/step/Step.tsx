import clsx from 'clsx';
import Text from '../../atoms/text/Text';
import ProgressBar from '../progressBar/ProgressBar';
import { StepProps } from '@/app/types/taskCard.type';
import './step.scss'

export default function Step({stepName, percentageStepProgress, weight, isOutOfMonth, onClick}: StepProps) {

    const classes = clsx('step', `${isOutOfMonth && 'step--out-of-month'}`);

    return (
        <div className={classes} onClick={onClick}>
            <Text className='step-title' weight='regular' mode='truncate'>Etapa: {stepName}</Text>
            <ProgressBar variant='step' percentage={percentageStepProgress}/>
            <Text weight='regular'>Peso: {weight}%</Text>
        </div>
    )
}