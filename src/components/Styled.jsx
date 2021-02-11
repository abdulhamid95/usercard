import styled, {css} from 'styled-components';

export const Header = styled.header`
    display: flex;
    margin-top: 25px;
    padding-bottom: 8px;
    padding-top: 8px;
    margin-bottom: 30px;
    .header{
        display:flex;
        justify-content: space-between;
    }
`


export const Logo = styled.img`
    height: 80px;
    border-radius: 50%;
    border: 1px solid #000;
`


export const NavbarLink = styled.a`
    color: #F78501;
    transition: .5s;
    margin-left: 25px;

    &:hover{
        color: #703e04;
        text-decoration: none;
    }
`

export const UserInput = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 50px 2px rgba(0, 0, 0, 0.5);
    padding: 50px;
    text-align: center;
    width: 400px;
    margin: auto;
    input{
        margin: 10px 20px;
        outline: none;
    }

    textarea{
        display:block;
        margin: auto;
        margin-top: 10px;
        margin-bottom: 30px;
    }
`

const Submit = ({type, value, ...rest}) => (
    <input id="submit" {...rest} type={type} value={value}/>
    );

export const Button = styled(Submit)`
    padding: 10px 35px;
    background: rgb(103,113,122);
    border-radius: 5px;
    font-weight: bold;
    color: white;
    margin: 20px auto;
    cursor: pointer;
    transition: .5s;
    border: none;
    &:hover{
        text-decoration: none;
        color: white;
        background: #F78501;
    }

`


export const Usercart = styled.div`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 50px 2px rgba(0, 0, 0, 0.5);
    padding: 15px;
    margin: 50px auto;

    .avatar{
        display: flex;
    }

    img{
        height: 80px;
    border-radius: 50%;
    border: 1px solid #000;
    margin-right:10px;
    margin-bottom:10px;
    
    }
    ${props => props.width && css`
    width: 500px;

  `}

`

export const H2 = styled.h2`
    font-size: 25px;
    color: #302f2f;
`

export const Strong = styled.span`
    font-weight: bold;
    color: #F78501;
`