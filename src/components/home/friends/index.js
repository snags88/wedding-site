import React from 'react'

import FriendImg from 'images/friend.jpg';

import {
  FriendsContainer,
  FriendList,
  FriendItem,
} from './style';

const Friends = () => {
  return (
    <FriendsContainer id="friends">
      <h2 className="u-font-script text-center u-m-b-5">our friends</h2>
      <FriendList className="row">
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend1" />
          <p className="font-weight-bold">Rachel Brown</p>
          <p>maid of honor</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend2" />
          <p className="font-weight-bold">Chiara Morin</p>
          <p>bridesmaid</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend3" />
          <p className="font-weight-bold">Lindsay Floyd</p>
          <p>bridesmaid</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend4" />
          <p className="font-weight-bold">Elly Beck</p>
          <p>bridesmaid</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend5" />
          <p className="font-weight-bold">Jarrad Hoffman</p>
          <p>best man</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend6" />
          <p className="font-weight-bold">Arthur Keller</p>
          <p>groomsman</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend7" />
          <p className="font-weight-bold">Alex Hiles</p>
          <p>groomsman</p>
        </FriendItem>
        <FriendItem className="col-md-6 col-sm-12">
          <img src={FriendImg} alt="Friend8" />
          <p className="font-weight-bold">Jaimie Clements</p>
          <p>groomsman</p>
        </FriendItem>
      </FriendList>
    </FriendsContainer>
  );
};

export default Friends;
