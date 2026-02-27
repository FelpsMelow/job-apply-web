import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Text from '../../atoms/text/Text';
import Button from '../../atoms/button/Button';
import './auth-header.scss'

interface AuthHeaderProps {
    page: string
    mode: 'login' | 'register'
}

export default function AuthHeader ( { page, mode }: AuthHeaderProps) {

    const router = useRouter();
    
    return (
        <header className='auth-header'>
            <div className='auth-header-img'>
                <Image
                    src='/logo-icon-28x28.svg'
                    alt='Imagem do usuário'
                    width={28}
                    height={28}
                />
            </div>
            <Text
                as='h1'
                mode='truncate'
                size='xl'
                weight='bold'
            >
                { page }
            </Text>
            <section className='auth-redirect'>
                <Text as='h1'>
                    { mode == 'login' ? 'Não tem uma conta?' : 'Já tem uma conta?' }
                </Text>
                <Button
                    className='auth-redirect-button'
                    onClick={() => router.replace(`/${mode == 'login' ? 'register' : 'login'}`)}
                    variant='link'
                >
                    {/* TODO - Colocar texto azul */}
                    <Text as='h1'>
                        { mode == 'login' ? 'Inscreva-se' : 'Fazer login' }
                    </Text>
                </Button>
            </section>
        </header>
    )

}