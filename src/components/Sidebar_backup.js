// import React, { useState } from "react";
// import { useStaticQuery, graphql } from "gatsby";
// import { RichText } from "prismic-reactjs";

// const Sidebarf = () => {
//   // const data = useStaticQuery(graphql`
//   //   query SidebarQuery {
//   //     prismicNewSideb {
//   //       id
//   //       data {
//   //         body {
//   //           items {
//   //             list {
//   //               text
//   //             }
//   //             list_level
//   //             menu_link {
//   //               slug
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
//   // `);
//   // console.log(data);

//   const [openLists, updateLists] = useState([]);

//   const updateList = (listIndex) => {
//     const newLists = [...openLists];

//     var index = newLists.indexOf(listIndex);
//     if (index !== -1) {
//       newLists.splice(index, 1);
//     } else {
//       newLists.push(listIndex);
//     }
//     updateLists(newLists);
//   };

//   const menuItems = data.prismicNewSideb.data.body[0].items;
//   const nestedMenu = {};
//   let x = 0;
//   let parent = 0;
//   let curLevel = 1;
//   //console.log(menuItems);
//   menuItems.forEach((item) => {
//     const level = Number(item.list_level.charAt(item.list_level.length - 1));
//     if (level === 1) {
//       nestedMenu["m" + x] = { ...item, children: {} };
//       curLevel = 1;
//     } else {
//       if (level > curLevel) {
//         parent = x - 1;
//         curLevel = level;
//       }
//       //if (!nestedMenu["m" + parent]) debugger;
//       if (parent === 0) nestedMenu["m" + parent].children["m" + x] = item;
//       else {
//         if (!nestedMenu["m0"].children["m" + parent].children)
//           nestedMenu["m0"].children["m" + parent].children = {};
//         nestedMenu["m0"].children["m" + parent].children["m" + x] = item;
//       }
//     }
//     x++;
//   });
//   //console.log(nestedMenu);

//   return (
//     <ul className="multi_list">
//       {Object.keys(nestedMenu).map((menuKey) => {
//         const menuItem = nestedMenu[menuKey];
//         const { slug } = menuItem.menu_link;
//         //console.log(menuItem.menu_link)
//         return (
//           <li
//             className={openLists.includes(menuKey) ? "open" : ""}
//             key={menuKey}
//             onClick={() => {
//               updateList(menuKey);
//             }}
//           >
//             <a>{RichText.asText(menuItem.list)}</a>

//             {menuItem.children && (
//               <ul>
//                 {Object.keys(menuItem.children).map((subMenuKey) => {
//                   const subMenuItem = menuItem.children[subMenuKey];
//                   const { slug } = subMenuItem.menu_link;
//                   return (
//                     <li
//                       key={subMenuKey}
//                       onClick={() => {
//                         updateList(subMenuKey);
//                       }}
//                       className={openLists.includes(subMenuKey) ? "open" : ""}
//                     >
//                       <a>{RichText.asText(subMenuItem.list)}</a>

//                       {subMenuItem.children && (
//                         <ul>
//                           {Object.keys(subMenuItem.children).map(
//                             (subMenuKeyDeep) => {
//                               const subMenuItemDeep =
//                                 subMenuItem.children[subMenuKeyDeep];
//                               const { slug } = subMenuItemDeep.menu_link;
//                               return (
//                                 <li
//                                   key={subMenuKeyDeep}
//                                   onClick={() => {
//                                     updateList(subMenuKeyDeep);
//                                   }}
//                                   className={
//                                     openLists.includes(subMenuKeyDeep)
//                                       ? "open"
//                                       : ""
//                                   }
//                                 >
//                                   {/* <a href={`/${slug}`}> */}
//                                   <a>{RichText.asText(subMenuItemDeep.list)}</a>
//                                 </li>
//                               );
//                             }
//                           )}
//                         </ul>
//                       )}
//                     </li>
//                   );
//                 })}
//               </ul>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default Sidebarf;
