
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
            <span>__________________________________________</span>
        </header>
    )
}
export default Header;