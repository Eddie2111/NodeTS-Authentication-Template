
export interface userProps {
  serial: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  active: boolean;
}

export interface userLoginProps {
  email: string;
  password: string;
}

export interface useLoginResponseProps {
  serial:string;
  email:srting;
  active:boolean | null;
  password:string;
}
