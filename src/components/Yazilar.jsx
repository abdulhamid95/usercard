import { UserInput } from './Styled'
import UserInputs from './UserInputs';
import { Usercart, H2, Strong } from "./Styled";
import avatar from '../assest/images/avatar.png'
import React, { useState } from "react"


function Yazilar(){

    // const [username, setUsername] = useState("");
    // const [title, setTitle] = useState("");
    // const [desc, setDesc] = useState("")
    // const nameInput = document.getElementById("name").value;
    // const titleInput = document.getElementById("title").value;
    // const descInput = document.getElementById("description").value;

    
    return(
        <>
        <UserInputs/>
            <div className="container">
                <Usercart width>
                    <img src={avatar} alt="avatar"/>
                    <H2>abdo</H2>
                    <Strong>Web Dev</Strong>
                </Usercart>
            </div>
        </>
    )
}

export default Yazilar;