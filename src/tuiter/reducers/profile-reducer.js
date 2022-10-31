import {createSlice} from "@reduxjs/toolkit";

const currentUser = {
    firstName: "Cool",
    lastName: "Dog",
    handle: "@coolDog",
    profilePicture: "dog-profile.jpg",
    bannerPicture: "dog-profile-banner.jpg",
    bio: "A pretty cool and awesome dog. Loves tennis balls and playing in parks. Let's go for a walk!",
    website: "romangino.com",
    location: "Boston, MA",
    dateOfBirth: "02/10/1998",
    dateJoined: "4/2016",
    followingCount: 103,
    followersCount: 7352,
    tuitCount: 5210
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: currentUser,
        reducers: {
            updateProfile(state, action) {
                const updatedProfile = action.payload;
                let [firstName, ...lastName] = updatedProfile.name.split(' ');
                lastName = lastName.join(' ');
                const bio = updatedProfile.bio;
                const location = updatedProfile.location;
                const website = updatedProfile.website;
                const [year, month, day] = updatedProfile.birthday.split('-');
                const dateOfBirth = [month, day, year].join('/');
                return {...state, firstName, lastName, bio, location, website, dateOfBirth}
            }
        }
    }
)
export const {updateProfile} = profileSlice.actions
export default profileSlice.reducer