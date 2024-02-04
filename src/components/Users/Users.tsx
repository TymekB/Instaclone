import {GetUsers} from "../Authorization/User";
import {useEffect, useState} from "react";

const Users = () => {
    const [users, setUsers] = useState<any>(null);

    useEffect(() => {
        GetUsers().then((users) => {
            users = users.slice(0,6);
            setUsers(users);
        });
    }, []);

    return (
        <div className="card">
            <div className="card-body d-flex justify-content-start">
                <ul className="list-unstyled mb-0">

                    {users?.map((user: any) => (
                        <li className="list-inline-item">
                            <button className="btn p-0 m-0">
                                <div className="d-flex flex-column align-items-center">
                                    <div
                                        className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border border-danger story-profile-photo">
                                        <img src="https://via.placeholder.com/200x200/" alt="..."
                                             style={{
                                                 transform: "scale(1.5)",
                                                 width: "100%",
                                                 position: "absolute",
                                                 left: 0
                                             }}/>
                                    </div>
                                    <small>{user.username}</small>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Users;
