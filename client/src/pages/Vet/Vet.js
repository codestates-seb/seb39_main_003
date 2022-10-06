import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
box-sizing: border-box;
.background{
    margin-top: 100px;
    padding: 70px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.img{
    width: 40%;
}
.text1{
    margin-top: 50px;
    font-size: xx-large;
    font-weight: 900;
}
.text2{
    margin-top: 20px;
    font-size: larger;
    font-weight: 300;
}
.text3{
    font-size: larger;
    font-weight: 300;
}
`

function Vet() {
  return (
    <Wrapper>
        <div className='background'>
            <img className='img' src='https://cdn.discordapp.com/attachments/1020944788419248179/1027630572492832769/-001.png'/>
            <div className='text1'>서비스 준비중입니다.</div>
            <div className='text2'>보다 나은 서비스 제공을 위해 페이지 준비중에 있습니다.</div>
            <div className='text3'>빠른 시일 내에 찾아뵙겠습니다.</div>
        </div>
    </Wrapper>
  )
}

export default Vet