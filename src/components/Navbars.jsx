import {Header, NavbarLink} from './Styled';
import { headerlinks } from "../DB";


function Navbar(headerLink){
    return (
      <>
      <NavbarLink 
        key={headerLink.id}  
        href={headerLink.link}
      >{headerLink.title}</NavbarLink>
      </>
    )
  }


function Navbars(){

    
    // const resultHtml = []
    // nav.forEach(({id, title, link}) => {
    //     resultHtml.push()
    // });
    return(
        <>
        <nav>

            {headerlinks.map(Navbar)}
            {/* <NavbarLink key={ids} href={links}>{titles}</NavbarLink> */}
            {/* <a href={link}>{title}</a> */}
            </nav>

        </>
    )
}

export default Navbars;