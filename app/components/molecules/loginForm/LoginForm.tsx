'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "@/app/schemas/login.schema";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import Text from '../../atoms/text/Text';
import DividerWithText from "../../atoms/dividerWithText/DividerWithText";
import SocialLoginButtons from "../../atoms/socialLoginButtons/SocialLoginButtons";
import "./login-form.scss";

interface LoginFormProps {
    isLoginError: boolean;
    onSubmit: (data: LoginFormData) => void;
}

export default function LoginForm({ isLoginError ,onSubmit }: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="login-form-inputs-container">
                <Input
                    label="Email"
                    autoComplete="email"
                    placeholder="email@gmail.com"
                    error={errors.email?.message}
                    {...register("email")}
                />

                <Input
                    label="Senha"
                    autoComplete="current-password"
                    type="password"
                    placeholder="• • • • • • •"
                    error={errors.password?.message ?? (isLoginError ? 'Senha e/ou email incorretos!' : undefined)}
                    {...register("password")}
                />

                <Button className="login-form-forgot-password" variant="link" disabled>
                    <Text as="h1">
                        Esqueceu a senha?
                    </Text>
                </Button>
                
                <Button
                    className="login-form-button"
                    type="submit"
                    size="lg"
                    variant="primary"
                    disabled={isSubmitting}
                >
                    Entrar
                </Button>
            </div>

            <DividerWithText/>

            <SocialLoginButtons/>

        </form>
    );
}
