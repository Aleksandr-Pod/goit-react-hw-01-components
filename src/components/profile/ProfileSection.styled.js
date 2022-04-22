import styled from 'styled-components';

export const ProfileSection = styled.div`
  margin: 20px auto;
  padding: 5px;
  width: 320px;
  background-color: dimgrey;
`;
export const Description = styled.div`background-color: #fff;`;
  
export const Avatar = styled.img`
  width: 320px;
  margin-top: 10px;
  border-radius: 50%;
  box-shadow: 0 10px 5px gray, 0 -10px 5px gray;
`;

export const Name = styled.p`
  margin: 5px 0;
  text-align: center;
  font-weight: bold;
  font-size: large;
`;
export const Tag = styled(Name)`
  font-size: normal;
  color: rgb(120, 0, 0);
`;
export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  background-color: rgb(175, 190, 255);
  border: 1px solid black;
  border-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  list-style: none;
`;

export const Label = styled.span`
  padding: 5px;
  font-weight: bold;`;

export const Quantity = styled.span`
  padding: 5px;
  font-style: italic;`;

