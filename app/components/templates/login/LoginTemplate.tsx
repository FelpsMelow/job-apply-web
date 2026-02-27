import AuthHeader from '../../molecules/authHeader/AuthHeader';
import LoginForm from '../../molecules/loginForm/LoginForm';
import './login-template.scss';

interface LoginTemplateProps {
    isLoginError: boolean;
    onSubmit: (e: { email: string; password: string }) => void;
}

export default function LoginTemplate({
    isLoginError,
    onSubmit,
}: LoginTemplateProps) {
    return (
        <div className="login-template">
            {/* LEFT SIDE – HERO */}
            <div className="login-hero">
            <div className="login-hero-overlay" />

            <div className="login-hero-content">
                <div className="login-hero-brand">
                    <span className="login-hero-logo" />
                    <span className="login-hero-title">Engenharia Leme</span>
                </div>

                <div className="login-hero-text">
                    <h2>Construindo o futuro com inteligência de dados.</h2>
                    <p>
                        Plataforma integrada para gestão de canteiros, suprimentos e
                        cronogramas de alta complexidade.
                    </p>
                </div>

                <span className="login-hero-footer">
                    © 2026 Engenharia Leme.
                </span>
            </div>
            </div>

            {/* RIGHT SIDE – FORM */}
            <div className="login-form-wrapper">
            <div className="login-form-container">
                <AuthHeader page="Login" mode="login" />

                <LoginForm
                isLoginError={isLoginError}
                onSubmit={onSubmit}
                />
            </div>
            </div>
        </div>
    );
}
