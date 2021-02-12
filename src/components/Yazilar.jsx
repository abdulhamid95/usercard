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

    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const usernameControl = (e) =>{
        setUsername(e.target.value)
    }
    const titleControl = (e) =>{
        setTitle(e.target.value)
    }
    const descControl = (e) =>{
        setDesc(e.target.value)
    }
    return(
        <>
        <UserInputs name={usernameControl} title={titleControl} desc={descControl}/>
            <div className="container">
                <Usercart width>
                    <img src={avatar} alt="avatar"/>
                    <H2>{username}</H2>
                    <Strong>{title}</Strong>
                    <p>{desc}</p>
                </Usercart>
            </div>
        </>
    )
}

export default Yazilar;