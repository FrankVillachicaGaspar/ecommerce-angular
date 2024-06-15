export interface LoginReqModel {
  emailOrUsername: string;
  password: string;
}

export interface LoginRespModel {
  user: UserModel;
  access_token: string;
}

export interface UserModel {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}
