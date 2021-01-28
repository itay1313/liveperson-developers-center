import React from "react";
import { Link, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";
import prismicLogo from "./../images/liveperson-header.svg";

const Header = ({ isHomepage, navigation }) => {
  if (!navigation) return null;

  const homepageClass = isHomepage ? "homepage-header" : "";
  const topNav = navigation.data.top_navigation;

  return (
    <header
      className={`flex justify-between site-header align-center ${homepageClass}`}
    >
      <Link to="/">
        <div className="logo flex">
          <img className="logo-image" src={prismicLogo} alt="our logo" />
        </div>
      </Link>
      <nav>
        <ul className="flex align-center">
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                <Link to={navItem.link.url}>
                  {RichText.asText(navItem.link_label.raw)}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
// delete comment
export const query = graphql`
  fragment HeaderQuery on PrismicNavigation {
    data {
      top_navigation {
        link {
          type
          uid
          url
        }
        link_label {
          raw
        }
      }
    }
  }
`;

export default Header;
