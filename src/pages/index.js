import Login from "../services/api/login";
import { useRouter } from 'next/router';

export default function Index(params)
{
    const router = useRouter();

    const onLogin = function(event) {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        if (!username || !password) {
            return;
        } else {
            Login(username, password).then((response) => {
                if (response.status === 200) {
                    localStorage.setItem('user-token', response.userToken);
                    router.push("/dashboard");
                }
            });
        }
    };

    return(
        <div>
        <h1>SOIOT SYSTEM</h1>
            <form onSubmit={onLogin} method="post">
                <input id="username" name="username" placeholder="username"/>
                <input type="password" id="password" name="password" placeholder="password"/>
                <button type="submit" name="login">Login</button>
            </form>
            <a href='#'>or create new account</a>
        </div>
    );
};