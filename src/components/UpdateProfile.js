// UpdateProfile.js

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

    const handleCheckboxInput = (evt) => {
        const { value, checked } = evt.target;
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

    const handleFileInput = (evt) => {
        const { name, files } = evt.target;
        setProfileToUpdate((prevUser) => ({
            ...prevUser,
            [name]: files[0],
        }));
    };

    const handleInput = (evt) => {
        const { name, value, type, checked } = evt.target;
        if (type === 'checkbox' && name !== 'interests') {
            setProfileToUpdate((prevUser) => ({
                ...prevUser,
                [name]: checked,
            }));
        } else if (type !== 'file') {
            setProfileToUpdate((prevUser) => ({
                ...prevUser,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (evt) => {
        console.log(profileToUpdate.id);
        evt.preventDefault();
        // const formData = new FormData();

        // Object.keys(profileToUpdate)?.forEach((key) => {
        //     if (key === 'interests') {
        //         profileToUpdate[key]?.forEach((interest) => formData.append(key, interest));
        //     } else {
        //         formData.append(key, profileToUpdate[key]);
        //     }
        // });
        // for (const key of formData.values()) {
        //     console.log(key);
        // }

        const formData = new FormData();

        for (let key in profileToUpdate) {
            if (profileToUpdate.hasOwnProperty(key)) {
                const value = profileToUpdate[key];
                if (Array.isArray(value)) {
                    value.forEach((item, index) => {
                        formData.append(`${key}[${index}]`, item);
                    });
                } else if (value instanceof File) {
                    formData.append(key, value);
                } else if (typeof value === 'boolean') {
                    formData.append(key, value ? true : false);
                } else {
                    formData.append(key, value);
                }
            }
        }

        updateUserProfile(formData)
            .then((response) => {
                console.log(response.data);
                dispatch(userLogin(response.data));
                console.log('Profile updated.');
            })
            .catch((err) => { console.error(err); });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form form-group" encType="multipart/form-data">
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
                    <div className="">
                        <input type="radio" name="gender" value="female" checked={profileToUpdate.gender === 'female'} onChange={handleInput} /> Female
                        <input type="radio" name="gender" value="male" checked={profileToUpdate.gender === 'male'} onChange={handleInput} /> Male
                    </div>
                </label>
                <br />
                <label>
                    Interests:
                    <input type="checkbox" name="interests" value="food" checked={profileToUpdate.interests && profileToUpdate.interests.includes('food')} onChange={handleCheckboxInput} /> Food
                    <input type="checkbox" name="interests" value="music" checked={profileToUpdate.interests && profileToUpdate.interests.includes('music')} onChange={handleCheckboxInput} /> Music
                    <input type="checkbox" name="interests" value="sports" checked={profileToUpdate.interests && profileToUpdate.interests.includes('sports')} onChange={handleCheckboxInput} /> Sports
                </label>
                <br />
                <label>
                    Avatar:
                    <input type="file" name="avatar" className="" onChange={handleFileInput} />
                </label>
                <br />
                <label>
                    CV:
                    <input type="file" name="cv" className="" onChange={handleFileInput} />
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








// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserProfile } from '../services/UserService';
// import { userLogin } from '../redux/UserSlice';

// const UpdateProfile = () => {
//     const dispatch = useDispatch();
//     const currentUser = useSelector((store) => store.user.loggedInUser);
//     const [profileToUpdate, setProfileToUpdate] = useState({
//         name: '',
//         username: '',
//         password: '',
//         email: '',
//         city: '',
//         phone: '',
//         website: '',
//         gender: '',
//         interests: [],
//         avatar: null,
//         cv: null,
//         subscribe: false,
//         birthdate: '',
//         bio: ''
//     });

//     useEffect(() => {
//         if (currentUser) {
//             setProfileToUpdate(currentUser);
//         }
//         console.log(currentUser);
//         console.log(profileToUpdate);
//     }, [currentUser]);

//     const handleCheckboxInput = (e) => {
//         const { value, checked } = e.target;
//         let updatedInterests = [];
//         if (Array.isArray(profileToUpdate.interests)) {
//             updatedInterests = [...profileToUpdate.interests];
//         }

//         if (checked) {
//             updatedInterests.push(value);
//         } else {
//             updatedInterests = updatedInterests.filter((interest) => interest !== value);
//         }
//         setProfileToUpdate({
//             ...profileToUpdate,
//             interests: updatedInterests,
//         });
//     };

//     const handleInput = (e) => {
//         const { name, value, type, checked, files } = e.target;
//         if (type === 'checkbox' && name !== 'interests') {
//             setProfileToUpdate((prevUser) => ({
//                 ...prevUser,
//                 [name]: checked,
//             }));
//         } else if (type === 'file') {
//             setProfileToUpdate((prevUser) => ({
//                 ...prevUser,
//                 [name]: files[0],
//             }));
//         } else {
//             setProfileToUpdate((prevUser) => ({
//                 ...prevUser,
//                 [name]: value,
//             }));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         updateUserProfile(profileToUpdate)
//             .then((response) => {
//                 dispatch(userLogin(response.data));
//                 console.log('Profile updated.');
//             })
//             .catch((err) => console.error(err));
//     };

//     return (
//         <div className="container">
//             <form onSubmit={handleSubmit} className="form form-group">
//                 <label>
//                     Name:
//                     <input type="text" name="name" className="form-control" value={profileToUpdate.name} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Username:
//                     <input type="text" name="username" className="form-control" value={profileToUpdate.username} onChange={handleInput} disabled />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input type="password" name="password" className="form-control" value={profileToUpdate.password} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Email:
//                     <input type="email" name="email" className="form-control" value={profileToUpdate.email} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     City:
//                     <input type="text" name="city" className="form-control" value={profileToUpdate.city} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Phone:
//                     <input type="tel" name="phone" className="form-control" value={profileToUpdate.phone} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Website:
//                     <input type="url" name="website" className="form-control" value={profileToUpdate.website} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Gender:
//                     <input type="radio" name="gender" value="female" checked={profileToUpdate.gender === 'female'} onChange={handleInput} /> Female
//                     <input type="radio" name="gender" value="male" checked={profileToUpdate.gender === 'male'} onChange={handleInput} /> Male
//                 </label>
//                 <br />
//                 <label>
//                     Interests:
//                     <input type="checkbox" name="interests" value="food" checked={profileToUpdate.interests.includes('food')} onChange={handleCheckboxInput} /> Food
//                     <input type="checkbox" name="interests" value="music" checked={profileToUpdate.interests.includes('music')} onChange={handleCheckboxInput} /> Music
//                     <input type="checkbox" name="interests" value="sports" checked={profileToUpdate.interests.includes('sports')} onChange={handleCheckboxInput} /> Sports
//                 </label>
//                 <br />
//                 <label>
//                     Avatar:
//                     <input type="file" name="avatar" className="" onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     CV:
//                     <input type="file" name="cv" className="" onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Subscribe:
//                     <input type="checkbox" name="subscribe" checked={profileToUpdate.subscribe} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Birthdate:
//                     <input type="date" name="birthdate" className="form-control" value={profileToUpdate.birthdate} onChange={handleInput} />
//                 </label>
//                 <br />
//                 <label>
//                     Bio:
//                     <textarea name="bio" className="form-control" value={profileToUpdate.bio} onChange={handleInput}></textarea>
//                 </label>
//                 <br />
//                 <button type="submit" className="btn btn-outline-primary">Update Profile</button>
//             </form>
//         </div>
//     );
// };

// export default UpdateProfile;

