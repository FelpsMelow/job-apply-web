import Avatar from "../../atoms/avatar/Avatar";
import Text from "../../atoms/text/Text";
import clsx from "clsx";
import "./user-info.scss";

interface UserInfoProps {
    userName?: string;
    userImgUrl?: string;
    className?: string;
}

export default function UserInfo({
    userName = "Usuário",
    userImgUrl,
    className,
}: UserInfoProps) {
return (
    <div className={clsx("user-info", className)}>
        <Avatar userImgUrl={userImgUrl} />
        
        <Text
        as="h4"
        mode="truncate"
        title={userName}
        className="user-info__name"
        >
        {userName}
        </Text>
    </div>
);
}
