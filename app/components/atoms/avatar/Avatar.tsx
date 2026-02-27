import Image from  'next/image'

interface AvatarProps {
    userImgUrl?: string;
    mode?: 'black' | 'white'
}

export default function Avatar({ userImgUrl, mode = 'black' }: AvatarProps) {

    const avatarIcon = mode == 'black' ? '/avatar-icon-24x24.svg' : '/avatar-icon-white-24x24.svg'

    console.log('Avatar renderizado com userImgUrl:', userImgUrl, 'e modo:', mode);

    return (
        <Image
            className='avatar'
            src={userImgUrl? userImgUrl: avatarIcon}
            alt='Imagem do usuário'
            width={30}
            height={30}
            unoptimized
        />
    )
}
