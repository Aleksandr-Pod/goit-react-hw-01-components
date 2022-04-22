import styled from "styled-components";

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px auto;
  width: 388px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: aquamarine;
`;

export const Status = styled.span`
  padding: 10px;
  height: 0;
  border-radius: 50%;
  background-color: ${props => props.isOnline ? "green" : "red"};
`;
const styleForAll = "margin: 0 5px;";
export const Avatar = styled.img`${styleForAll}`;
export const Name = styled.p`${styleForAll}`;