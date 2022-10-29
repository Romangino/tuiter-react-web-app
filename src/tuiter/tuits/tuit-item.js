import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
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
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <div className={'border border-secondary border-opacity-25 border-bottom-0'}>
            <div className={'row pt-2 ps-3 pe-2'}>
                <div className='col-1'>
                    <img className='rounded-circle'
                         height={48}
                         width={48}
                         src={tuit.image} alt=""/>
                </div>
                <div className='col-11'>
                    <i className={"bi bi-x-lg float-end"}
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className='row ps-4'>
                        <span className='ps-0 fw-bold'>
                            {tuit.userName}
                            <span className='ps-1'>
                                <i className='bi bi-patch-check-fill text-primary'/>
                            </span>
                            <span className='fw-normal text-secondary ps-1'>
                                {tuit.handle}
                            </span>
                            <span className='text-secondary'>
                                <i className='bi bi-dot'></i>
                            </span>
                            <span className=' text-secondary fw-normal'>
                                {tuit.time}
                            </span>
                        </span>
                        <div className='ps-0 pt-1'>
                            <p className={'me-5'}>
                                {tuit.tuit}
                            </p>
                        </div>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </div>

    )
}
export default TuitItem