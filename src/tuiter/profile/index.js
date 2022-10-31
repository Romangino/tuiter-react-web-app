import React from "react";
import './index.css'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return(
        <>
            <div className={'row'}>
                <div className={'col-1 pt-1'}>
                    <Link to="/tuiter/home">
                        <i className={'bi bi-arrow-left wd-profile-back-arrow'}></i>
                    </Link>
                </div>
                <div className={'col-11 text-secondary'}>
                    <h5 className={'fw-bold mb-0 text-black'}>{profile.firstName} {profile.lastName}</h5>
                    <p className={'mb-1 wd-tuit-count'}>{profile.tuitCount.toLocaleString()} Tuits</p>
                </div>
            </div>
            <div className='row'>
                <img height={250} className={'w-100'}
                     src={`/images/${profile.bannerPicture}`} alt=""/>
            </div>
            <div className={'row'}>
                <div className={'col-8 position-relative'}>
                    <img className={'rounded-circle position-absolute wd-profile-icon'}
                         src={`/images/${profile.profilePicture}`} alt=""/>
                </div>
                <div className={'col-4 pt-3 pe-4'}>
                    <Link to={'/tuiter/edit-profile'}>
                        <button className={'btn border rounded-pill fw-semibold float-end'}>
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className={'row ps-4 pt-4'}>
                <div className={'row'}>
                    <h4 className={'fw-bold mb-0'}>{profile.firstName} {profile.lastName}</h4>
                    <p className={'text-secondary'}>{profile.handle}</p>
                </div>
                <div className={'row'}>
                    <p>{profile.bio}</p>
                </div>
                <div className={'row'}>
                    <span className={'text-secondary'}>
                        <span>
                            <i className={'bi bi-geo-alt pe-1'}></i>
                            {profile.location}
                        </span>
                        <span className={'ps-4'}>
                            <i className={'bi bi-balloon pe-1'}></i>
                            Born {profile.dateOfBirth}
                        </span>
                        <span className={'ps-4'}>
                            <i className={'bi bi-calendar3 pe-1'}></i>
                            Joined {profile.dateJoined}
                        </span>
                        <span className={'ps-4'}>
                            <i className={'bi bi-link-45deg pe-1'}></i>
                            <a href={`https://www.${profile.website}`}>{profile.website}</a>
                        </span>
                    </span>
                </div>
                <div className={'row pt-3'}>
                    <span className={'text-secondary'}>
                        <span className={'fw-semibold text-black pe-1'}>
                            {profile.followingCount.toLocaleString()}
                        </span>
                        Following
                        <span className={'fw-semibold text-black ps-3 pe-1'}>
                            {profile.followersCount.toLocaleString()}
                        </span>
                        Followers
                    </span>
                </div>
            </div>
        </>
    )
}
export default ProfileComponent