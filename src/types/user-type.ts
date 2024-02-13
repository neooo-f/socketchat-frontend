export type UserType = {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
  biography?: string;
};

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}
