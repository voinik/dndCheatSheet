import { Voi } from '@v-n-b/voi';

export interface ILoginValidated {
    username: string;
    password: string;
}

const login = Voi.object({
    username: Voi.string().min(3).max(255),
    password: Voi.string().min(6).max(25),
});

export const loginSchema = login.options({ convert: false, presence: 'required' });


export interface IRegisterValidated {
    email: string;
    username: string;
    password: string;
}

const register = Voi.object({
    email: Voi.string().min(5).max(254).regex(/^.+@.+$/),
    username: Voi.string().min(3).max(255),
    password: Voi.string().min(6).max(25),
});

export const registerSchema = register.options({ convert: false, presence: 'required' });
