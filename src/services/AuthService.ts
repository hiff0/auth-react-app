import { AxiosResponse } from 'axios';
import api from "../http";

//TODO Сделать тип респонса и подредачик в бэке
export default class AuthService {
    static async signUp(login: string, email: string, password: string): Promise<AxiosResponse> {
        return api.post('/auth/sign-up', { login, email, password });
    }

    static async signIn(login: string, password: string): Promise<AxiosResponse> {
        return api.post('/auth/sign-in', { login, password });
    }
}