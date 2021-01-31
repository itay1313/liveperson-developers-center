import React, { useEffect, useState } from "react";
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
              menu_link {
                slug
                uid
              }
            }
          }
        }
      }
    }
  `);

  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);
  // hooks in react
  // only run when the component is mount
  useEffect(() => {
    const maxLevel = 3;
    const navBarItems = data.prismicNewSideb.data.body[0].items;
    let currentList = [];
    let listOfLists = [];
    navBarItems.forEach((item, idx) => {
      const lastIndex = idx;
      const currentListLevel = Number(navBarItems[idx].list_level.substr(6));
      const nextListLevel = navBarItems[idx + 1]
        ? Number(navBarItems[idx + 1].list_level.substr(6))
        : undefined;
      // console.log(currentListLevel);

      if (currentListLevel < nextListLevel) {
        // console.log("overview + children");
        currentList.push(item);
      } else if (currentListLevel === maxLevel) {
        // console.log("page (eoa)");
        currentList.push(item);
        if (nextListLevel !== maxLevel) {
          listOfLists.push(currentList);
          currentList = [];
        }
      } else if (
        currentListLevel < nextListLevel ||
        currentListLevel === nextListLevel
      ) {
        // console.log("page (no children)");
        listOfLists.push([item]);
        currentList = [];
      }
    });
    setList(listOfLists);
  }, []);

  useEffect(() => {}, [list]);

  return (
    <div className="sidebar_menu">
      {list.map((l) => {
        return (
          <ul className="ul.multi_list">
            {l.map((i) => {
              return (
                <li className={i.list_level} key={i.menu_link.slug}>
                  <a href={i.menu_link.uid}>{RichText.asText(i.list)}</a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
export default Sidebar;
