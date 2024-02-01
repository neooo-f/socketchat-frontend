import { login } from "../services/authService"
import { JwtPayload, jwtDecode } from "jwt-decode";
import { UserType } from "../types/user-type";

export const handleToken = async (user: { username: string, password: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: { access_token } } = await login(user);
    sessionStorage.setItem('access_token', access_token);
}

export const getUserFromToken = (): UserType | null => {
    const token = sessionStorage.getItem('access_token');
    
    if (!token) {
      return null;
    }
  
    const decoded = jwtDecode(token) as JwtPayload;
  
    // Manuell nur die Eigenschaften von UserType extrahieren
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { iat, exp, ...userWithoutJwtProps } = decoded;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { iss, sub, aud, nbf, jti, ...userTypeProps } = userWithoutJwtProps;
    
    // TODO: fix interface
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return userTypeProps.body as UserType;
  };