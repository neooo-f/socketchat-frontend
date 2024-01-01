import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';

type LoginFormInput = {
  username: string;
  password: string;
};

export const Login: React.FC = (): ReactElement => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<LoginFormInput>();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
    login({ username: data.username, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="border rounded p-2" {...register('username')} />
      <input {...register('password')} />
      <input type="submit" />
    </form>
  );
};
