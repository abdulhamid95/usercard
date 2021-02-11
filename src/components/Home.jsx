import UserInputs from './UserInputs'
import Usercards from './Usercards'
import HeaderItems from './HeaderItems'
import React, { useState } from "react"
import {Button} from './Styled'



function Home() {

const [userCard, setUserCard] = useState()

    const ctaAdd = () => {
    const nameInput = document.getElementById("name").value;
    const titleInput = document.getElementById("title").value;
    const descInput = document.getElementById("description").value;
    const id = 4;
    
    console.log(nameInput)
    console.log(titleInput)
 setUserCard(<Usercards id={id} name={nameInput} title={titleInput} description={descInput} />)
}
    return(
        <>

                <UserInputs change={ctaAdd} />
                <Usercards />
                {userCard}

        </>
    )
}

export default Home;