import styled from 'styled-components';
import React from 'react'
import CommunityNav from '../../components/CommunityNav';
import Dummy from '../../dummytest/dummyData';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`

box-sizing: border-box;

// 게시글 목록
.cpostterritory{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cpostterritory > .cbackground{
    padding: 30px 0px;
    margin: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #F9F9F9;
}
.cposttop{
    width: 95vw;
    margin-bottom: 20px;
    padding: 10px 10px;

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
.questions{
    //(구)cpost
    width: 90vw;
    margin: 20px 0px 20px 0px;
    padding: 10px 10px;
    border-radius: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    cursor: pointer;
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

.categories {
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
}

.article{
    padding: 0px 20px 0px 20px;
}

/* .questions{
    //(구)questions
    padding: 5px 0px 5px 0px;
    margin: 20px 0px 20px 0px;
    width: 90vw;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border: 1px solid red;
} */

`;


function Community() {

    const [id, setId] = useState(undefined);
    // 1 === 최종적으로 값을 보여줄 본체
    // 1 === 마루타 (실험체) 성공적이면 본체로 내용을 복사해줌
    // useState(초기값) 의 초기값 id === 1

    const navigate = useNavigate();

  return (
    <Wrapper>

            <CommunityNav />

        {/* 카테고리 명 분류 */}
        <div className="categories">
            <span>산책 게시판</span>
        </div>


        {/* <!-- 게시글 목록 --> */}
        <div className="cpostterritory">
            <div className="cbackground">
                <div className="cposttop">
                    <span className="cposttext">글 제목11</span>
                    <span className="cposttext">내용11</span>
                    <span className="cposttext">작성자11</span>
                </div>
                
                    <div>
                        
                        {Dummy.map((el, index) => (

                            <div className="questions"
                                 key={index} // 고유번호
                                 onClick={
                                    () => { // 눌렀을때 어떻게 되어야할지 설정해주는 곳
                                    setId(el.id)
                                    navigate(`/community/post/${el.id}`)
                                    }
                                    }
                                    >
                                <span className="article">{el.title}</span>
                                <span className="article">{el.content}</span>
                                <span className="article">{el.username}</span>
                            </div>
                        ))}

                    </div>

                {/* <div className="cpostmiddle">
                    <div className="cpost">
                        <span className="title">글 제목222</span>
                        <a href="/" className="content">내용222</a>
                        <span className="user">작성자222</span>
                    </div>
                </div> */}


                
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