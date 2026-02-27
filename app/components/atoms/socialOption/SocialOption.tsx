import Image from "next/image";
import clsx from "clsx";
import "./social-option.scss";

interface SocialOptionProps {
    iconSrc: string;
    alt: string;
    onClick?: () => void;
    className?: string;
}

export default function SocialOption({
    iconSrc,
    alt,
    onClick,
    className,
}: SocialOptionProps) {
    return (
        <button
            className={clsx("social-option", className)}
            onClick={onClick}
            aria-label={`Entrar com ${alt}`}
        >
            <Image src={iconSrc} alt={alt} width={28} height={28} />
        </button>
    );
}
