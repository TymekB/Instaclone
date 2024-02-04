const GetUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
};

const GetUser = async (userId: number) => {
    const users = await GetUsers();
    return users.find((user: any) => user.id === userId);
};

const GetLoggedUser = () => {
    const userId = localStorage.getItem('userId');

    if(userId === null) {
        return new Promise((resolve, reject) => {
            reject();
        });
    }

    return GetUser(parseInt(userId));
}

const LogIn = async (login: string, password: string) => {
    const users = await GetUsers();
    const user = users.find((user: any) => user.email === login && password === 'placeholder');

    if (user) {
        localStorage.setItem('userId', user.id);
        return user;
    }

    throw new Error('User not found');
};

const LogOut = () => {
    localStorage.removeItem('userId')
};

export { GetLoggedUser, GetUsers, LogIn, LogOut };
