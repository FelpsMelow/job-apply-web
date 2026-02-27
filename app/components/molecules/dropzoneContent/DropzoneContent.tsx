import Button from '../../atoms/button/Button'
import Text from '../../atoms/text/Text'
import Image from 'next/image'
import './dropzone-content.scss'

interface DropzoneContentProps {
    onSelectFileClick: () => void;
    status: boolean;
    fileName: string;
}

export default function DropzoneContent ({ onSelectFileClick, status, fileName }: DropzoneContentProps) {

    return (
        <section className='dropzone-content'>

            <Image
                src="/xlsx-icon-64x64.svg"
                alt="Logo LEME"
                width={64}
                height={64}
            />

            {
                status ? (
                        <div>
                            <Text as='h1' size='xl' weight='medium'>
                                ✅ Arquivo selecionado com sucesso!
                            </Text>
                            <br/>
                            <Text as='h1' size='sm' weight='medium'>
                                Nome do arquivo: {fileName}
                            </Text>
                        </div>
                ) : (
                    <div>
                        <Text as='h1' size='xl' weight='medium'>
                            Arraste e solte o arquivo Excel aqui
                        </Text>
                        <br />
                        <Text as='h1' size='sm'>
                            Formatos aceitos: .xlsx, .csv (Máximo 10MB)
                        </Text>
                    </div>
                )
            }


            <Button onClick={onSelectFileClick}>
                {
                    status ? (
                        '🔁 Mudar arquivo selecionado'
                    ) : (
                        '📂 Selecionar arquivo'
                    )
                }
            </Button>
        </section>
    )
}