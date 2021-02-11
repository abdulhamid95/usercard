import { UserInput, Button } from "./Styled";
import React, { useState } from "react"

function UserInputs({change, name, title, desc}){

    // const [username, setUsername] = useState("");
    // const [title, setTitle] = useState("");
    // const usernameControl = (e) =>{
    //     setUsername(e.target.value)
    // }
 

    return(
        <>
        <div className="container">
            <UserInput>               
                <input type="text" id="name" placeholder="Name" />
                <input type="text" id="title" placeholder="Title"/>
                <textarea name="description" id="description" rows="5" placeholder="Description"></textarea>
                <Button id="submit" type="submit" value="button" onClick={change} />
            
            </UserInput>

            
        </div>
        </>
    )
}

export default UserInputs;