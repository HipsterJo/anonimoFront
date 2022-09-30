import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/Authresponse";
import { IUser } from "../models/IUser";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>("/users");
    }
}