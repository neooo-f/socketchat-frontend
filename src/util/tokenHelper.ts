import { login } from "../services/authService"

export const handleToken = async (user: { username: string, password: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data: { access_token } } = await login(user);
    sessionStorage.setItem('access_token', access_token);
}