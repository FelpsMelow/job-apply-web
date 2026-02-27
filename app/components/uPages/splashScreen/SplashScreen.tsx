import Image from 'next/image';
import './splash-screen.scss'

export default function SplashScreen () {

    return (
        <div className='splash-screen'>
            <Image
                src='/logo-leme-icon-176x54.svg'
                alt='Logo Leme Splash Screen'
                height={75}
                width={220}
            />
        </div>
    )
}