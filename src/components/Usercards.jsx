import { Usercart, Button, H2, Strong } from "./Styled";
import avatar from '../assest/images/avatar.png'
import { users } from "../DB";

function Usercard({id, name, title, description}){

    return(
        <>
        <div className="col-12 col-md-6 col-lg-4">
            <Usercart key={id}>
                <div className="avatar">
                    <img src={avatar} alt="avatar"/>
                    <div>
                        <H2>{name}</H2> 
                        <Strong>{title}</Strong>
                    </div>
                </div>
                <p>{description}</p>
                <Button type="button" value="Learn More" />
            </Usercart> 
        </div>
        </>
    );
}

function Usercards({id, name, title, description}){

    if(name == null){
    return(
        <>
            <div className="container">
                <div className="row">
                {users.map(Usercard)}     
            </div>
        </div>
        </>
    )
    } else {
        return(
            <>
            <div className="container">

                    <div className="col-12 col-md-6 col-lg-4">
                        <Usercart key={id}>
                            <div className="avatar">
                                <img src={avatar} alt="avatar"/>
                                <div>
                                    <H2>{name}</H2> 
                                    <Strong>{title}</Strong>
                                </div>
                            </div>
                            <p>{description}</p>
                            <Button type="button" value="Learn More" />
                        </Usercart> 
                    </div>

            </div>
            </>
        );
    }
}

export default Usercards;