import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from  "../AuthContext";
const HeaderContainer=  styled.header`
margin:0px 20px;
background-color: black;
color:rgb(203, 226, 221);
display:flex;
justify-content: space-between;
`;

function Header({children}){
    const { isLoggedIn, logout } = useContext(AuthContext);
   const navigate=useNavigate();
    const navigatToNotesView = () => {
        logout()
        navigate("/");
      };
    return(
        <HeaderContainer >
         <h1 data-testid="keepnote">Keep Note</h1>
        {children}
        <div>
            {isLoggedIn ?
            (<span>
                <Link className="routerlink" to="/notes">Home</Link>
      <Link className="routerlink" to="/" onClick={navigatToNotesView}>Logout</Link>
           </span> ):(
                <Link className="routerlink" to="/">Login</Link>
            )}
            <Link className="routerlink" to="/register">Register</Link>
        </div>
        </HeaderContainer>

    )
}

export default Header;