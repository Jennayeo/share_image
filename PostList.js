import React from "react";
import {useSelector, useDispatch} from "react-redux"; //1. Dispatch import 해준다

import Post from "../components/Post";
import {actionCreators as postActions} from "../redux/modules/post"; // getpost.FB써야하니 액션 크리에이터 import

const PostList = (props) => {
    const dispatch = useDispatch(); // 추가
    const post_list = useSelector((state) => state.post.list);

    console.log(post_list);
    React.useEffect(()  => {
        dispatch(postActions.setPostFB());
    }, []); // 처음에 한번만 파이어베이스에 요청(그래서 빈 배열)
    return ( // 하나의 포스트
        <React.Fragment>
            이곳은 목록 페이지!
            {/* <Post/> */} 
            {post_list.map((p, idx) => {
                return <Post key={p.id} {...p}/>
            })}
        </React.Fragment>
    )
}

export default PostList;
