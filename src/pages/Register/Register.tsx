import { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Header } from '../../components/Header/Header';
import { handleBlur, handleFocus } from '../../util/inputHelper';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { register as registerUser } from '../../services/authService';
import { ImageUploader } from '../../components/ImageUploader/ImageUploader';
import { Gender } from '../../types/user-type';

type RegisterFormInput = {
  username: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  biography?: string;
};

export const Register: React.FC = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // TODO: maybe handle file with usefrom in future
  const [profileImage, setProfileImage] = useState<File | undefined>(undefined);

  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    // TODO: implement yup resolver & handle errors
  } = useForm<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...newUser } = data;
    await registerUser(newUser, profileImage);
    navigate('/login');
  };

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div>
        <Header />
        <br /> <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5 flex justify-center">
            <ImageUploader
              onUpload={(files) => setProfileImage(files)}
              onRemove={() => setProfileImage(undefined)}
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('username')}
              placeholder={'username'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.username')
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('firstName')}
              placeholder={'first name'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.firstName')
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('lastName')}
              placeholder={'last name'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.lastName')
              }
            />
          </div>
          <div className="mb-3">
            <select
              {...register('gender')}
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              defaultValue={''}
            >
              <option value="" disabled hidden>
                Select Gender
              </option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('password')}
              placeholder={'password'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.password')
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('confirmPassword')}
              placeholder={'repeat password'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.repeatPassword')
              }
            />
          </div>
          <div className="mb-3">
            <input
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('dateOfBirth')}
              placeholder={'date of birth'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.dateOfBirth')
              }
            />
          </div>
          <div className="mb-6">
            <textarea
              className="border rounded p-2 w-full text-center placeholder-center text-black"
              {...register('biography')}
              placeholder={'biography'}
              onFocus={handleFocus}
              onBlur={(event) =>
                handleBlur(event, t, 'register.placeholder.biography')
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
