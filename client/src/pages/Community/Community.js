import styled from 'styled-components';
import React from 'react'
import CommunityNav from '../../components/CommunityNav';

const Wrapper = styled.div`

box-sizing: border-box;

// 게시글 목록
.cpostterritory{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 3px solid blue;
}
.cpostterritory > .cbackground{
    padding: 30px 10px;
    margin: 20px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #F9F9F9;
}
.cposttop{
    width: 90vw;
    padding: 10px 10px;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: rgb(146 99 255);
}
.cposttext{
    color: #F9F9F9;
    font-weight: bold;
}
.cpostmiddle{
    width: 90vw;
    padding: 10px 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cpost{
    width: 90vw;
    padding: 10px 10px;
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: #EEF1FF;
}
.title{}
.content{
    text-decoration: none;
    color: #000000;
}
.user{}
.cpostbottom{
    padding: 10px;
    margin-top: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.cpostpage{
    padding: 5px;

    text-decoration: none;
    color: #000000;
}
`;

function Community() {
  return (
    <Wrapper>

            <CommunityNav />

        {/* <!-- 게시글 목록 --> */}
        <div className="cpostterritory">
            <div className="cbackground">
                <div className="cposttop">
                    <span className="cposttext">글 제목11</span>
                    <span className="cposttext">내용11</span>
                    <span className="cposttext">작성자11</span>
                </div>
                <div className="cpostmiddle">
                    <div className="cpost">
                        <span className="title">글 제목222</span>
                        <a href="/" className="content">내용222</a>
                        <span className="user">작성자222</span>
                    </div>
                </div>
                
                <div className="cpostbottom">
                    <a href="/" className="cpostpage">1</a>
                    <a href="/" className="cpostpage">2</a>
                    <a href="/" className="cpostpage">3</a>
                    <a href="/" className="cpostpage">4</a>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default Community;