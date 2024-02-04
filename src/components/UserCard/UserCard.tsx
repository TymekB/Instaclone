import Navbar from "../Navbar/Navbar";
import {useParams} from "react-router-dom";
import {GetUser} from "../../services/User";
import {useEffect, useState} from "react";
import User from "../../models/User";
import Posts from "../Posts/Posts";

const UserCard = () => {
    const {id} = useParams();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (id === undefined) return;

        GetUser(parseInt(id)).then((user: User) => {
            setUser(user);
        });
    }, []);

    return (
        <div>
            <Navbar/>

            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4">
                    <div className="card mt-3">
                        <div className="card-body">
                            <h3>Basic info</h3>
                            <p>Username: {user?.username}</p>
                            <p>Email: {user?.email}</p>
                            <h3>Address</h3>
                            <p>City: {user?.address.city}</p>
                            <p>Suite: {user?.address.suite}</p>
                            <p>Street: {user?.address.street}</p>
                            <p>Zipcode: {user?.address.zipcode}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    {user === null ? <div>Loading...</div> : <Posts userId={user.id}/>}
                    <Posts userId={1}/>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
