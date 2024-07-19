
// link (next js)
import Link from "next/link";

const links =[
  {path:'/',name:'home'},
  {path:'/projects',name:'my projects'},
  {path:'/contact', name:'contanct'},
];


const Nav = ({ containerStyles, linkStyles, underlineStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link,index)=>{
        return <Link href={link.path}>{link.name}</Link>;
      })}
    </nav>
);
};

export default Nav;