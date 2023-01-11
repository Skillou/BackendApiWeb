export declare class Client {
    id: number;
    civility: 'male' | 'female' | 'other';
    firstName: string;
    lastName: string;
    email: string;
    telephone: string;
    street: string;
    city: string;
    zipCode: string;
    login: string;
    password: string;
    isAdmin: boolean;
}
export type SafeClient = Omit<Client, 'password'>;
export type LoginClient = Pick<Client, 'login' | 'password'>;
