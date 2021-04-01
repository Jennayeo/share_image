import React from "react";
// import Grid from "../elements/Grid";
// import Word from "../elements/Word";
// 대신 아래처럼 깔끔하게 한줄에 import
import {Grid, Text} from "../elements";

const Post = (props) => {    
    return (
        <React.Fragment>
            <Grid padding ="16px">
                <Grid padding="16px"> 
                    <Text>단어: {props.word}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>설명: {props.description}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>예시: {props.example}</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

// 필요한 props들을 미리 넘겨줌(props가없을때 오류나 화면깨짐 방지)
Post.defaultProps = {
        word: "hello",
        description: "world",
        example: "hello world",
};

export default Post;
