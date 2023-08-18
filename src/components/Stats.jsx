import {
  Stat,
  StatNumber,
  StatsWrapper,
  StatTitle,
} from "./styles/Stats.styled";

export const Stats = ({ user }) => {
  return (
    <StatsWrapper role="list">
      <Stat>
        <StatTitle>Repos</StatTitle>
        <StatNumber>{user?.public_repos}</StatNumber>
      </Stat>
      <Stat>
        <StatTitle>Followers</StatTitle>
        <StatNumber>{user?.followers}</StatNumber>
      </Stat>
      <Stat>
        <StatTitle>Following</StatTitle>
        <StatNumber>{user?.following}</StatNumber>
      </Stat>
    </StatsWrapper>
  );
};
