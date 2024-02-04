import {GetLoggedUser} from "../User/User";
import {useEffect, useState} from "react";
import instagram from "../../assets/suggestions/suggestion-1.jpg";
import dccomics from "../../assets/suggestions/suggestion-2.png";
import thecw from "../../assets/suggestions/suggestion-3.jpg";


const Suggestions = () => {
    const [loggedUser, setLoggedUser] = useState<any>(null);

    useEffect(() => {
        GetLoggedUser().then((user: any) => {
            setLoggedUser(user);
        });
    }, []);

    return (
        <div className="col-4">
            <div className="d-flex flex-row align-items-center">
                <div
                    className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sidenav-profile-photo">
                    <img src="https://via.placeholder.com/200x200" alt="..."
                         style={{
                             transform: "scale(1.5)",
                             width: "100%",
                             position: "absolute",
                             left: 0
                         }}/>
                </div>
                <div className="profile-info ml-3">
                    <span className="profile-info-username">{loggedUser?.name}</span>
                    <span className="profile-info-name">{loggedUser?.email}</span>
                </div>
            </div>

            <div className="mt-4">
                <div className="d-flex flex-row justify-content-between">
                    <small className="text-muted font-weight-normal">Suggestions For You</small>
                    <small>See All</small>
                </div>
                <div>
                    <div
                        className="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <div
                                className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                                <img src={instagram} alt="..."
                                     style={{
                                         transform: "scale(1.5)",
                                         width: "100%",
                                         position: "absolute",
                                         left: 0
                                     }}/>
                            </div>
                            <strong className="ml-3 sugest-username">instagram</strong>
                        </div>
                        <button className="btn btn-primary btn-sm p-0 btn-ig ">Follow</button>
                    </div>
                    <div
                        className="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <div
                                className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                                <img src={dccomics} alt="..."
                                     style={{
                                         transform: "scale(1.5)",
                                         width: "100%",
                                         position: "absolute",
                                         left: 0
                                     }}/>
                            </div>
                            <strong className="ml-3 sugest-username">dccomics</strong>
                        </div>
                        <button className="btn btn-primary btn-sm p-0 btn-ig ">Follow</button>
                    </div>
                    <div
                        className="d-flex flex-row justify-content-between align-items-center mt-3 mb-3">
                        <div className="d-flex flex-row align-items-center">
                            <div
                                className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center border sugest-profile-photo">
                                <img src={thecw} alt="..."
                                     style={{
                                         transform: "scale(1.5)",
                                         width: "100%",
                                         position: "absolute",
                                         left: 0
                                     }}/>
                            </div>
                            <strong className="ml-3 sugest-username">thecw</strong>
                        </div>
                        <button className="btn btn-primary btn-sm p-0 btn-ig">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Suggestions;
