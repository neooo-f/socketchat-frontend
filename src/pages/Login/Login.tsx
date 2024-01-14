import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';
import { Header } from '../../components/Header/Header';
import { useTranslation } from 'react-i18next';
import { handleFocus } from '../../util/inputHelper';
import { handleBlur } from '../../util/inputHelper';
import { useNavigate } from 'react-router-dom';

type LoginFormInput = {
  username: string;
  password: string;
};

export const Login: React.FC = (): ReactElement => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    // TODO: implement yup resolver & handle errors
  } = useForm<LoginFormInput>();

  const onSubmit = (data: LoginFormInput) => {
    console.log(data);
    login({ username: data.username, password: data.password });
    navigate('/');
  };

  return (
    <div>
      <Header />
      <br /> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* TODO: later maybe give Header className prop */}
        <div className="mb-3">
          <input
            className="border rounded p-2 w-full text-center placeholder-center text-black"
            {...register('username')}
            placeholder={t('login.placeholder.username')}
            onFocus={handleFocus}
            onBlur={(event) =>
              handleBlur(event, t, 'login.placeholder.username')
            }
          />
        </div>
        <div className="mb-6">
          <input
            className="border rounded p-2 w-full text-center placeholder-center text-black"
            {...register('password')}
            placeholder={t('login.placeholder.password')}
            onFocus={handleFocus}
            onBlur={(event) =>
              handleBlur(event, t, 'login.placeholder.password')
            }
          />
        </div>
        <input
          type="submit"
          value={t('login.submit')}
          className="bg-blue-500 text-white px-12 py-2 rounded-md cursor-pointer"
        />
      </form>
    </div>
  );
};
