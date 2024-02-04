import Address from "./Address";

class User
{
    id: number;
    username: string;
    email: string;
    address: Address;

    constructor(id: number, name: string, email: string, address: Address) {
        this.id = id;
        this.username = name;
        this.email = email;
        this.address = address;
    }
}

export default User;
