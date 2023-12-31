import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type LoginFormInput = {
    username: string;
    password: string;
}

export const Login: React.FC = (): ReactElement => {
    const { register, handleSubmit, formState: { errors }, } = useForm<LoginFormInput>();

    const onSubmit = (data: LoginFormInput) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username')} />
            <input {...register('password')} />
            <input type="submit" />
        </form>
    )
}