import DataServices from "./get-data";

export default async function Login(username, password) {
    const user = DataServices.getUser(username, password);

    let response = {
        status: 400,
        body: {}
    };

    if (user) {
        response.status = 200;
        response.body = {
            ...user, 
            userToken: JSON.stringify(user)
        };
    }

    return response;
}