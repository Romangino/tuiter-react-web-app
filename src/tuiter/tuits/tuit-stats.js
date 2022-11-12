import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../images/spacex-profile.jpg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "dislikes": 0,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch()
    return(
        <div className='row text-secondary ps-2'>
            <div className='col'>
                <i className='bi bi-chat'></i>
                <span className='ps-3'>
                    {tuit.replies}
                </span>
            </div>
            <div className='col'>
                <i className='bi bi-arrow-repeat'></i>
                <span className='ps-3'>
                    {tuit.retuits}
                </span>
            </div>
            <div className='col'>
                <i onClick={() => dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        likes: tuit.likes + 1
                    }))
                }className="bi bi-heart-fill me-2 text-danger"></i>
                <span className='ps-3'>
                    {tuit.likes}
                </span>
            </div>
            <div className='col'>
                <i onClick={() => dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    }))
                }className="bi bi-hand-thumbs-down-fill me-2 text-warning"></i>
                <span className='ps-3'>
                    {tuit.dislikes}
                </span>
            </div>
            <div className='col'>
                <i className='ps-3 bi bi-upload'></i>
            </div>
        </div>
    )
}
export default TuitStats
