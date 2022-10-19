import React from "react";

const PostListItem = (
    {
        post = {
            retuit: [true, 'Elon Musk'],
            avatarIcon: '../../images/spacex-profile.jpg',
            userName: 'SpaceX',
            handle: '@SpaceX',
            time: '23h',
            tuit: 'Dennis and Akiko Tito are the first two crewmembers on Starship\'s second commercial spaceflight around the Moon -> spacex.com/updates',
            media: '/images/starship-couple1.jpg',
            replyTuit: [false, {}],
            comments: '595',
            retuits: '1168',
            likes: '11.1K',
            showThread: true
        }
    }
) => {
    return (
        <li className='list-group-item border border-bottom-0 border-opacity-10 rounded-0 p-3'>
            <div className={post.retuit[0] ? '' : 'd-none'}>
                <div className='row ms-3'>
                <span className='text-secondary'>
                    <i className='bi bi-arrow-repeat'></i>
                    <span className='ps-2'>{' '}{post.retuit[1]} Retuited</span>
                </span>
                </div>
            </div>
            <div className='row'>
                <div className='col-1'>
                    <img className='rounded-circle'
                         height={48}
                         src={post.avatarIcon} alt=""/>
                </div>
                <div className='col-11'>
                    <div className='row ps-3'>
                        <span className='ps-0 fw-bold'>
                            {post.userName}
                            <span className='ps-1'>
                                <i className='bi bi-patch-check-fill text-primary'/>
                            </span>
                            <span className='fw-normal text-secondary ps-1'>
                                {post.handle}
                            </span>
                            <span className='text-secondary'>
                                <i className='bi bi-dot'></i>
                            </span>
                            <span className=' text-secondary fw-normal'>
                                {post.time}
                            </span>
                            <span className='float-end text-secondary'>
                                <i className='bi bi-three-dots'></i>
                            </span>
                        </span>
                        <div className='ps-0'>
                            <p>
                                {post.tuit}
                            </p>
                        </div>
                        <div className={post.media[0] ? 'ps-0' : 'd-none'}>
                            <div>
                                <img className='rounded-4 img-fluid'
                                     src={post.media[1]} alt=""/>
                            </div>
                        </div>
                        <div className={post.replyTuit[0] ? 'ps-0' : 'd-none'}>
                            <div className='border border-opacity-10 rounded-4 pt-2 ps-2 pe-2'>
                                <div className='row'>
                                    <div className='col-1'>
                                        <img className='rounded-circle' height={24}
                                             src={post.replyTuit[1].avatarIcon} alt=""/>
                                    </div>
                                    <div className='col-11 ps-0 fw-bold'>
                                        {post.replyTuit[1].userName}
                                        <span className='ps-1'>
                                            <i
                                               className='bi bi-patch-check-fill text-primary'></i>
                                        </span>
                                        <span className='ps-1 text-secondary fw-normal'>
                                            {post.replyTuit[1].handle}
                                        </span>
                                        <span className='text-secondary'>
                                            <i className='bi bi-dot'></i>
                                        </span>
                                        <span className='text-secondary fw-normal'>
                                            {post.replyTuit[1].time}
                                        </span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <p className='pt-1'>
                                        {post.replyTuit[1].tuit}
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className='row text-secondary pt-3 ps-0'>
                            <div className='col'>
                                <i className='bi bi-chat'></i>
                                <span className='ps-3'>
                                    {post.comments}
                                </span>
                            </div>
                            <div className='col'>
                                <i className='bi bi-arrow-repeat'></i>
                                <span className='ps-3'>
                                    {post.retuits}
                                </span>
                            </div>
                            <div className='col'>
                                <i className='bi bi-heart'></i>
                                <span className='ps-3'>
                                    {post.likes}
                                </span>
                            </div>
                            <div className='col'>
                                <i className='ps-3 bi bi-upload'></i>
                            </div>
                        </div>
                        <div className={post.showThread ? 'ps-0 pt-3': 'd-none'}>
                            <a style={{textDecoration: 'none'}}
                               href=''
                                className='text-primary mb-0'>
                                Show this Thread
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostListItem;