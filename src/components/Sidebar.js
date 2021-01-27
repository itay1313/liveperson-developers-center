import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      prismicNewSideb {
        id
        data {
          body {
            items {
              list {
                text
              }
              list_level
            }
          }
        }
      }
    }
  `);
  // console.log(data);
  return (
    <ul className="multi_list">
      {data.prismicNewSideb.data.body[0].items.map((item) => {
        return (
          <li
            className={`
          multi ${item.list_level}
          `}
          >
            {" "}
            {RichText.asText(item.list)}
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
