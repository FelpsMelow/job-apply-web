import Image from 'next/image';
import clsx from 'clsx';
import './label-with-arrow.scss'

interface LabelWithArrowProps {
    isCollapsed: boolean;
    text: string
    onClick?: () => void
}

export default function LabelWithArrow({ isCollapsed, text }: LabelWithArrowProps) {

    const arrowIcon = '/arrow-icon-18x18.svg'

    const classes = clsx('arrow', `${isCollapsed && 'arrow-down'}`)

    return (
        <span className='label-with-arrow'>
            {text}
            <Image
                className={classes}
                src={arrowIcon}
                alt='Icone de seta'
                width={18}
                height={18}
            />
        </span>
    )
}