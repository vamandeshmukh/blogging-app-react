// Delete.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../services/UserService';
import { userLogin } from '../redux/UserSlice';

const UpdateProfile = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((store) => store.user.loggedInUser);
    const [profileToUpdate, setProfileToUpdate] = useState({
        name: '',
        username: '',
        password: '',
        email: '',
        city: '',
        phone: '',
        website: '',
        gender: '',
        interests: [],
        avatar: null,
        cv: null,
        subscribe: false,
        birthdate: '',
        bio: ''
    });

    useEffect(() => {
        if (currentUser) {
            setProfileToUpdate(currentUser);
        }
    }, [currentUser]);

    const handleCheckboxInput = (e) => {
        const { value, checked } = e.target;
        let updatedInterests = [];
        if (Array.isArray(profileToUpdate.interests)) {
            updatedInterests = [...profileToUpdate.interests];
        }

        if (checked) {
            updatedInterests.push(value);
        } else {
            updatedInterests = updatedInterests.filter((interest) => interest !== value);
        }
        setProfileToUpdate({
            ...profileToUpdate,
            interests: updatedInterests,
        });
    };

    const handleInput = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox' && name !== 'interests') {
            setProfileToUpdate((prevUser) => ({
                ...prevUser,
                [name]: checked,
            }));
        } else if (type === 'file') {
            setProfileToUpdate((prevUser) => ({
                ...prevUser,
                [name]: files[0],
            }));
        } else {
            setProfileToUpdate((prevUser) => ({
                ...prevUser,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile(profileToUpdate)
            .then((response) => {
                dispatch(userLogin(response.data));
                console.log('Profile updated.');
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form form-group">
                <label>
                    Name:
                    <input type="text" name="name" className="form-control" value={profileToUpdate.name} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Username:
                    <input type="text" name="username" className="form-control" value={profileToUpdate.username} onChange={handleInput} disabled />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" className="form-control" value={profileToUpdate.password} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" className="form-control" value={profileToUpdate.email} onChange={handleInput} />
                </label>
                <br />
                <label>
                    City:
                    <input type="text" name="city" className="form-control" value={profileToUpdate.city} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" name="phone" className="form-control" value={profileToUpdate.phone} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Website:
                    <input type="url" name="website" className="form-control" value={profileToUpdate.website} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Gender:
                    <input type="radio" name="gender" value="female" checked={profileToUpdate.gender === 'female'} onChange={handleInput} /> Female
                    <input type="radio" name="gender" value="male" checked={profileToUpdate.gender === 'male'} onChange={handleInput} /> Male
                </label>
                <br />
                <label>
                    Interests:
                    <input type="checkbox" name="interests" value="food" checked={profileToUpdate.interests.includes('food')} onChange={handleCheckboxInput} /> Food
                    <input type="checkbox" name="interests" value="music" checked={profileToUpdate.interests.includes('music')} onChange={handleCheckboxInput} /> Music
                    <input type="checkbox" name="interests" value="sports" checked={profileToUpdate.interests.includes('sports')} onChange={handleCheckboxInput} /> Sports
                </label>
                <br />
                <label>
                    Avatar:
                    <input type="file" name="avatar" className="" onChange={handleInput} />
                </label>
                <br />
                <label>
                    CV:
                    <input type="file" name="cv" className="" onChange={handleInput} />
                </label>
                <br />
                <label>
                    Subscribe:
                    <input type="checkbox" name="subscribe" checked={profileToUpdate.subscribe} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Birthdate:
                    <input type="date" name="birthdate" className="form-control" value={profileToUpdate.birthdate} onChange={handleInput} />
                </label>
                <br />
                <label>
                    Bio:
                    <textarea name="bio" className="form-control" value={profileToUpdate.bio} onChange={handleInput}></textarea>
                </label>
                <br />
                <button type="submit" className="btn btn-outline-primary">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;



// import React, { useState } from 'react';

// function Delete() {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [isFilePicked, setIsFilePicked] = useState(false);

//     const changeHandler = (event) => {
//         setSelectedFile(event.target.files[0]);
//         setIsFilePicked(true);
//     };

//     const handleSubmission = () => {
//         const formData = new FormData();
//         formData.append('File', selectedFile);

//         fetch(
//             'YOUR_API_ENDPOINT', // Replace with your API endpoint
//             {
//                 method: 'POST',
//                 body: formData,
//             }
//         )
//             .then((response) => response.json())
//             .then((result) => {
//                 console.log('Success:', result);
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     };

//     return (
//         <div className="App">
//             <input type="file" name="file" onChange={changeHandler} />
//             {isFilePicked ? (
//                 <div>
//                     <p>Filename: {selectedFile.name}</p>
//                     <p>Filetype: {selectedFile.type}</p>
//                     <p>Size in bytes: {selectedFile.size}</p>
//                     <p>
//                         lastModifiedDate: {selectedFile.lastModifiedDate.toLocaleDateString()}
//                     </p>
//                 </div>
//             ) : (
//                 <p>Select a file to show details</p>
//             )}
//             <div>
//                 <button onClick={handleSubmission}>Submit</button>
//             </div>
//         </div>
//     );
// }

// export default Delete;
