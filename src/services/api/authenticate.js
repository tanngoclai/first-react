export function Authenticate(params)
{
    return localStorage.getItem('user-token') !== null;
}