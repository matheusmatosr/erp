import React, { useState } from 'react';
import {
    FaHandsHelping,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/about",
            name:"Sobre",
            icon:<FaUserAlt/>
        },
        {
            path:"/comment",
            name:"Contato",
            icon:<FaCommentAlt/>
        },
        {
            path:"/product",
            name:"Produtos",
            icon:<FaShoppingBag/>
        },
        {
            path:"/productList",
            name:"Lista",
            icon:<FaThList/>
        },
        {
            path:"/",
            name:"Ajuda",
            icon:<FaHandsHelping/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: "200px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: "block"}} className="logo">Menu</h1>
                   <div style={{marginLeft: "50px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: "block"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;