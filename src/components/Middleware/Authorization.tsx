const GetUsers = async () => {
    const response = await fetch('https://jsonplaceholder.org/users');

    return await response.json();
};

const LogIn = async (login: string, password: string) => {
    const users = await GetUsers();
    const user = users.find((user: any) => user.email === login && password === user.login.password);

    if (user) {
        localStorage.setItem('userId', user.id);

        return user;
    }

    throw new Error('User not found')
};

const LogOut = () => {
    console.log('logging out');
}

export {LogIn, LogOut};
