import './edit-profile.css'
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer"

const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const birthdayData = profile.dateOfBirth.split('/')
    const [birthday, setBirthday] = useState(birthdayData[2] + "-" + birthdayData[0] + '-' + birthdayData[1]);

    const updateProfileHandler = () => {
        dispatch(updateProfile({name, bio, location, website, birthday}));
        navigate('/tuiter/profile');
    }
    return(
        <>
            <div className={'row'}>
                <div className={'col-1'}>
                    <Link to="/tuiter/profile">
                        <i className={'bi bi-x wd-edit-profile-cancel'}></i>
                    </Link>
                </div>
                <div className={'col-9 pt-2'}>
                    <h5 className={'fw-bold mb-0 text-black'}>Edit Profile</h5>
                </div>
                <div className={'col-2'}>
                    <button
                        className={'btn btn-dark float-end rounded-pill w-100'}
                        onClick={updateProfileHandler}>
                        Save
                    </button>
                </div>
            </div>
            <div className='row position-relative'>
                <img className={'wd-edit-profile-banner w-100'}
                     src={`/images/${profile.bannerPicture}`} alt=""/>
                <div className={'col'}>
                    <button className={'btn btn-dark rounded-circle wd-edit-profile-image-upload position-absolute'}>
                        <i className={'bi bi-camera fs-3'}></i>
                    </button>
                </div>
                <div className={'col'}>
                    <button className={'btn btn-dark rounded-circle wd-edit-profile-image-cancel position-absolute'}>
                        <i className={'bi bi-x fs-3'}></i>
                    </button>
                </div>
                <div className={'position-relative'}>
                    <img className={'position-absolute rounded-circle wd-edit-profile-icon'}
                         src={`/images/${profile.profilePicture}`} alt=""/>
                    <button className={'position-relative btn btn-dark rounded-circle wd-edit-profile-icon-image-upload'}>
                        <i className={'bi bi-camera fs-3'}></i>
                    </button>
                </div>
            </div>
            <form>
                <div className={"form-group pt-4"}>
                    <div className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                        <label className={'ps-2 text-secondary fs-6'} htmlFor={"name-field"}>Name</label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"name-field"} value={name}
                               onChange={event => {setName(event.target.value)}}/>
                    </div>
                </div>
                <div className={"form-group pt-3"}>
                    <div className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                        <label className={'ps-2 text-secondary fs-6'} htmlFor={"bio-field"}>Bio</label>
                        <textarea className={"form-control border-0 ps-2"}
                                  id={"bio-field"} value={bio}
                                  onChange={event => setBio(event.target.value)}/>
                    </div>
                </div>
                <div className={"form-group pt-3"}>
                    <div className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                        <label className={'ps-2 text-secondary fs-6'} htmlFor={"location-field"}>Location</label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"location-field"} value={location}
                               onChange={event => setLocation(event.target.value)}/>
                    </div>
                </div>
                <div className={"form-group pt-3"}>
                    <div className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                        <label className={'ps-2 text-secondary fs-6'} htmlFor={"website-field"}>Website</label>
                        <input type={"text"} className={"form-control border-0 ps-2"}
                               id={"website-field"} value={website}
                               onChange={event => setWebsite(event.target.value)}/>
                    </div>
                </div>
                <div className={"form-group pt-3"}>
                    <div className={'border border-secondary rounded-2 border-opacity-25 p-1'}>
                        <label className={'ps-2 text-secondary fs-6'} htmlFor={"birthday-field"}>Birthday</label>
                        <input type={"date"} className={"form-control border-0 ps-2"}
                               id={"birthday-field"} value={birthday}
                               onChange={event => setBirthday(event.target.value)}/>
                    </div>
                </div>
            </form>
            <div className={'pt-3'}>
                <button className={'btn btn-light w-100 bg-white border border-thin'}>
                    <h6 className={'float-start pt-2'}>Switch to professional</h6>
                    <i className={'bi bi-arrow-right pt-1 float-end'}></i>
                </button>
            </div>
            <br/><br/>
        </>
    )
 }
 export default EditProfile