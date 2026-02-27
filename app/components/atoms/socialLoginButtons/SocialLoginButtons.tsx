import SocialOption from "../socialOption/SocialOption";
import "./social-login-buttons.scss";

interface SocialLoginButtonsProps {
    onGoogleClick?: () => void;
    onAppleClick?: () => void;
}

export default function SocialLoginButtons( { onGoogleClick, onAppleClick }: SocialLoginButtonsProps) {
    return (
        <div className="social-login-buttons">
            <SocialOption iconSrc="/logo-google-icon-23x23.svg" alt="Google" onClick={onGoogleClick}/>
            <SocialOption iconSrc="/logo-apple-icon-20x23.svg" alt="Apple" onClick={onAppleClick}/>
        </div>
    );
}
