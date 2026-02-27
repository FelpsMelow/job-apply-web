import Image from "next/image";
import Text from "../../../atoms/text/Text";
import "./user-list-item.scss";

interface UserRowProps {
    name: string;
    email: string;
    avatarUrl: string;
    mode?: "black" | "white";
    onClick?: () => void;
}

export default function UserListItem({ name, email, avatarUrl, mode = "black", onClick }: UserRowProps) {
    const avatarIcon = mode === "black" ? "/avatar-icon-24x24.svg" : "/avatar-icon-white-24x24.svg";
    const safeAvatar = avatarUrl?.trim() ? avatarUrl : avatarIcon;

    return (
        <div className="user-list-item" onClick={onClick}>
            <div className="user-list-item-avatar">
                <Image src={safeAvatar} alt={name} width={20} height={20} unoptimized />
            </div>

            <div className="user-list-item-info">
                <Text as="strong" size="md" weight="medium" className="user-list-item-name">{name}</Text>
                <Text as="span" size="sm" color="secondary" className="user-list-item-email">{email}</Text>
            </div>
        </div>
    );
}
