import clsx from 'clsx'
import './overlay.scss'

interface OverlayProps {
    isVisible: boolean
    onClick: () => void
}

export default function Overlay ({ isVisible, onClick }: OverlayProps) {

    const classes = clsx('overlay', `${isVisible && 'overlay-visible'}`)

    return (
        <div className={classes} onClick={onClick}>
            
        </div>
    )
}