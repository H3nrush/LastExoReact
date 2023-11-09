import './style.css';

function Header(){
const user = [
    {name: "Hassan",
    lastname : "Mohammadi",
    isUserAdmin : true
}
]
    return (
        <header className="header1">
            
            {user[0].isUserAdmin && (<p>Welcome : {user[0].name}</p>)}
           
        </header>
    )
}
export default Header;