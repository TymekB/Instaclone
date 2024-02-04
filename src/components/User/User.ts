import User from "../../models/User";

const GetUsers = async (): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    return await response.json();
};

const GetUser = async (userId: number): Promise<User> => {
    const users = await GetUsers();
    const user = users.find((user: User): boolean => user.id === userId);

    if(!user) {
        throw new Error('User not found');
    }

    return new User(user.id, user.username, user.email);
};

const GetLoggedUser = (): Promise<User> => {
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
    const user = users.find((user: User) => user.email === login && password === 'placeholder');

    if (user) {
        localStorage.setItem('userId', String(user.id));
        return user;
    }

    throw new Error('User not found');
};

const LogOut = () => {
    localStorage.removeItem('userId')
};

export { GetLoggedUser, GetUsers, LogIn, LogOut };
