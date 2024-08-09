import "./Nav.css" 

export default function Nav(){
    
    return(
        <>
    <div className="topnav">
        <a className="active" href= "/">Home</a>
        <a href = "/login">Login</a>
        <a href ="/register">Register</a>
        <a href ="/dictionary">Dictionary</a>
    </div>
    </>
    )
}
