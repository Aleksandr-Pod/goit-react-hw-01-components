import PropTypes from 'prop-types';
// import styles from './profile.module.css';
import { ProfileSection, Description, Avatar, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from './ProfileSection.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
    return (
        <ProfileSection>
            <Description>
                <Avatar
                src={avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsItem>
            </Stats>
        </ProfileSection>
    )
} 

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
}