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

  useEffect(() => {
    const maxLevel = 3;
    let lastLevel = 1;
    const navBarItems = data.prismicNewSideb.data.body[0].items;
    let currentList = [];
    let listOfLists = [];
    navBarItems.forEach((item, idx) => {
      const lastIndex = idx;
      const currentListLevel = Number(navBarItems[idx].list_level.substr(6));
      const nextListLevel = navBarItems[idx + 1]
        ? Number(navBarItems[idx + 1].list_level.substr(6))
        : undefined;

      if (currentListLevel < nextListLevel) {
        console.log(currentListLevel);
        currentList.push(item);
        lastLevel = currentListLevel;
      } else if (
        currentListLevel === maxLevel ||
        currentListLevel > lastLevel
      ) {
        console.log("page (eoa)");
        currentList.push(item);
        lastLevel = currentListLevel;

        if (nextListLevel !== maxLevel) {
          listOfLists.push(currentList);
          currentList = [];
        }
      } else if (
        currentListLevel === nextListLevel ||
        currentListLevel > nextListLevel
      ) {
        console.log("page (no children)");
        listOfLists.push([item]);
        currentList = [];
        lastLevel = currentListLevel;
      }

      //1 overview + children
      //2 overview + children
      //3 page (eoa)
      //2 page (no children)
      //2 page (no children)
      //2 overview + children
      //3 page (eoa)
      //3 page (eoa)
      //3 page (eoa)
      //2 overview + children
      //3 page (eoa)
    });
    setList(listOfLists);
  }, []);

  useEffect(() => {}, [list]);

  return (


<div className="sidebar_menu">
        {list.map((l) => {
          return (
            <ul className="multi_list">
              {l.map((i, idx) => {
                return <li key={idx} className={i.list_level}>
                 <a href={i.menu_link.uid}>{RichText.asText(i.list)}</a>
                 </li>;
              })}
            </ul>
          );
        })}
      </div>


  );
};
export default Sidebar;
