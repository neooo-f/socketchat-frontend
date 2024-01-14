export type UserType = {
    id: string;
    username: string;
    password?: string;
    firstName: string;
    lastName: string;
    gender: Gender
    dateOfBirth: Date;
    biography: string;
}

enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}