import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header/Header';
import { /* handleBlur, */ handleFocus } from '../../util/inputHelper';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type RegisterFormInput = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  biography: string;
};

export const Register: React.FC = (): ReactElement => {
  // const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    // TODO: implement yup resolver & handle errors
  } = useForm<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    console.log(data);
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div>
        <Header />
        <br /> <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* TODO: later maybe give Header className prop */}
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('username')}
              placeholder={'username'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.username')
                console.log(event)
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'first name'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'last name'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'password'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'repeat password'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'date of birth'}
              onFocus={handleFocus}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <div className="mb-6">
            <textarea
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'biography'}
              onFocus={(event) => console.log(event)}
              onBlur={(event) =>
                // handleBlur(event, t, 'login.placeholder.password')
                console.log(event)
              }
            />
          </div>
          <input
            type="submit"
            value={'Sign Up'}
            className="bg-blue-500 text-white px-12 py-2 rounded-md cursor-pointer"
          />
        </form>
        <p className="text-sm mt-11">
          {'Already have an Account? - '}
          <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};
