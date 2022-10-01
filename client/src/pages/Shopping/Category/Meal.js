/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ItemDatas from '../../../dummytest/ItemData';
import { Link } from "react-router-dom";




const Wrapper = styled.div`

  .eatBox {
    width: 100%;
    display: flex;
    background-color: beige;
  }

  .eat {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 2px solid purple;
    background-color: #EEE3CB;
    font-size: 23px;
    color: #850E35;
    font-weight: bold;
    cursor: pointer;
  }

  .cookie {
    width: 50%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background-color: #EEE3CB;
      font-size: 23px;
      color: #850E35;
      font-weight: bold;
    }
  }

  .categoryTab {
    width: 100%;
    height: 40px;
    display: flex;
  }

  .otherCategory {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1.5px solid lightgray;
    cursor: pointer;

    &:hover {
      color: purple;
      font-weight: bold;
      background-color: #EEEEEE;
    }
  }

  .line {
    border-right: 2px solid purple;
  }

  /* .test {
    width: 200px;
    height: 200px;
    border: 1px solid red;
  } */

  .item_list_box {
    width: 100%;
    height: 100%;
    /* border: 2px solid red; */
    /* display: flex;
    flex-wrap: wrap;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  .item_box {
    width: 17rem;
    height: 17rem;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow-x: hidden;
    cursor: pointer;
    margin: 30px 0px 15px 93px;
  }

  .itemName {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
    border-bottom: 1px solid lightgray;
  }

  .itemPrice {
    width: 100%;
    /* border: 1px solid black; */
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .image {
    width: 16rem;
    height: 10rem;
    position: relative;
    bottom: 5%;
    /* border: 1px solid lightgray; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item_list {
    margin: 0px 10px 0px 10px;
  }

  .add {
    width: 100%;
    height: 3rem;
    /* border: 1px solid blue; */
    line-height: 3rem;
    display: flex;
    justify-content: center;
    margin: 10px 0px -5px 0px;
  }

  .addProduct {
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px 20px 10px 20px;
    background-color: #EEEEEE;
    cursor: pointer;

    &:hover {
      font-weight: 550;
      background-color: #CFD2CF;
    }
  }

  .img {
    width: 17.5rem;
    height: 13rem;
    background-size: cover;
    margin-bottom: 50px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`




function Meal( { convertPrice } ) {
  
  const [test, setTest] = useState(ItemDatas)
  
  const [itemList, setItemList] = useState(undefined);
  
    useEffect(() => {
    fetch(`http://211.58.40.128:8080/api/v1/item?itemCategoryId=11`)
    .then((res) => res.json())
    .then(res => {
      setItemList(res.data)
      console.log(res)
    })
    .catch(() => console.log('실패'))
  } , [])

  const navigate = useNavigate();

  const onClickCookie = () => {
    navigate(`/shopping/cookie`)
  }

  const onClickEat = () => {
    navigate(`/shopping/meal`)
  }

  const onClickVita = () => {
    navigate(`/shopping/vita`)
  }

  const onClickPad = () => {
    navigate(`/shopping/pad`)
  }
  
  let params = useParams();

  // const imagePoint = https://mypet-imaga.s3.ap-northeast-2.amazonaws.com/items/

  return (

    

    <Wrapper>

      <div className='categoryTab'>
        {/* 클릭된 카테고리 focus 효과 주기 */}
        <span className='otherCategory line' onClick={onClickEat}>먹거리</span>
        <span className='otherCategory line' onClick={onClickVita}>건강관리</span>
        <span className='otherCategory' onClick={onClickPad}>각종용품</span>
      </div>

      <div className='eatBox'>
        <span className='eat'>사료</span>
        <span className='cookie' onClick={onClickCookie}>간식</span>
      </div>
        

      <div className="item_list_box">
            {itemList && itemList.map((el, idx) => {
                const final = `https://mypet-imaga.s3.ap-northeast-2.amazonaws.com/items/${el.thumbnail}`
              return (
                <div key={idx} className='item_box' onClick={() => {
                  navigate(`/shopping/item/${el.itemId}`)}}>

                    <div className='image'>
                        <div>
                          <img className='img' src={final} alt='사진' />
                        </div>
                    </div>

                    <div className='itemName'>
                        <div className="item_list">{el.itemName}</div>
                    </div>

                    <div className='itemPrice'>
                        <div className="item_list">{convertPrice(el.price)}원</div>
                    </div>

                </div>
              )
            })}
      </div>

      {sessionStorage.getItem('accessToken') ? 
        <div className='add'>
          <StyledLink to='/shopping/add'>
            <span className='addProduct'>상품등록</span>
          </StyledLink>
        </div>
       :
        undefined
      }

    </Wrapper>
  
    )
}

export default Meal