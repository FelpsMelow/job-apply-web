"use client";

import { useUser } from "@/app/contexts/user.context";
import UserInfo from "../userInfo/UserInfo";
import Button from "../../atoms/button/Button";
import Image from "next/image";
import Text from "../../atoms/text/Text";
import { useRouter } from "next/navigation";
import "./header.scss";


export default function Header() {

    const user = useUser()
    const router = useRouter();
    
    return (
        <header className="header">
            <section className="header-title">
                <Image
                    src="/icon-192x192.png"
                    alt="Logo LEME"
                    width={30}
                    height={30}
                    unoptimized
                />
                <Text as='h1' size="lg">
                    Portal de Gestão
                </Text>
            </section>
            <section className="header-right-content">   
                <section className="header-list-buttons">
                    <Button variant="secondary" onClick={() => router.push('/')}>
                        Upload
                    </Button>
                    <Button variant="secondary" onClick={() => router.push('/users')}>
                        Usuários
                    </Button>
                    <Button variant="secondary" disabled>
                        Power BI
                    </Button>
                </section>
                <section className="header-user-info">
                    <UserInfo
                        userImgUrl={user.fotoPerfil}
                        userName={user.nome}
                    />
                </section>
            </section>
        </header>
    );
}
