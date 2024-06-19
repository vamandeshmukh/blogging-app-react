import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";
import { useState } from "react";

const Profile = () => {

    const userProfile = useSelector(store => store.user.loggedInUser);
    const [showOrHide, setShowOrHide] = useState(false);

    const showUpdateProfile = () => {
        setShowOrHide(!showOrHide);
    };

    return (
        <>
            <div className="container">
                <h1>User Profile Component</h1>
                <>
                    {userProfile &&
                        <>
                            <h3>{userProfile.username && userProfile.username}</h3>
                            <h3>{userProfile.name && userProfile.name}</h3>
                            <p>{userProfile.email && userProfile.email}</p>
                            <p>{userProfile.address && userProfile.address.city}</p>
                            <p>{userProfile.phone && userProfile.phone}</p>
                            <p>{userProfile.company && userProfile.company.name}</p>
                        </>
                    }
                </>
                <hr />
                <button onClick={showUpdateProfile} className="btn btn-outline-primary">{
                    showOrHide ? 'Editing done' : 'Edit your profile'
                }</button>
                {showOrHide &&
                    <UpdateProfile />
                }
            </div>
        </>
    );
}

export default Profile;


