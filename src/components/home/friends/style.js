import styled from '@emotion/styled'

export const FriendsContainer = styled.section`
	margin: 100px 0;
`;

export const FriendList = styled.ul`
  list-style: none;
  max-width: 720px;
  margin: 0 auto;
`;

export const FriendItem = styled.li`
	text-align: center;
  padding-bottom: 28px;

  p {
    font-size: 20px;
    margin-bottom: 0px;
  }

  img {
    margin-bottom: 8px;
    box-shadow: 3px 5px 20px 0px rgba(50, 50, 50, 0.45);
  }
`;
