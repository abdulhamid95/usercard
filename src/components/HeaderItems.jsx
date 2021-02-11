import { Header, Logo, Layout } from "./Styled";
import Navbars from './Navbars'
import avatar from '../assest/images/avatar.png'




function HeaderItems(){
    return(
        <>
            <Header>
                <div className="container">
                    <div className="header" >
                        <a href="#">
                        <Logo src={avatar} />
                        </a>
                  
                        <Navbars />
                     
                    </div>
                </div>
            </Header>
        </>
    )
}

export default HeaderItems;