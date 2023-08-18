import { Link, LinksItem, LinksList } from "./styles/Links.styled";
import { ReactComponent as IconLocation } from "../assets/icon-location.svg";
import { ReactComponent as IconWebsite } from "../assets/icon-website.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconCompany } from "../assets/icon-company.svg";

export const Links = ({ user }) => {
  return (
    <LinksList aria-label="Links" role="list">
      <LinksItem>
        <Link $notAvailable={!user?.location} as={"p"}>
          <IconLocation aria-hidden="true" />
          {user?.location || "Not available"}
        </Link>
      </LinksItem>
      <LinksItem>
        <Link $notAvailable={!user?.blog} as={user?.blog === "" && "p"} href={user?.blog}>
          <IconWebsite aria-hidden="true" />
          {user?.blog || "Not available"}
        </Link>
      </LinksItem>
      <LinksItem>
        <Link
          $notAvailable={!user?.twitter_username}
          as={user?.twitter_username === "" && "p"}
          href={user?.twitter_username && `https://x.com/${user?.twitter_username}`}
        >
          <IconTwitter aria-hidden="true" />
          {user?.twitter_username || "Not available"}
        </Link>
      </LinksItem>
      <LinksItem>
        <Link
          $notAvailable={!user?.company}
          href={
            user?.company &&
            `https://github.com/${user?.company.replace("@", "")}`
          }
        >
          <IconCompany aria-hidden="true" />
          {user?.company || "Not available"}
        </Link>
      </LinksItem>
    </LinksList>
  );
};
