const Navbar = () => {
    const onClick = () => {
        window.location.href = "#profile";
      };
    
      const onClick2 = () => {
        window.location.href = "#projects";
      };
    return ( 
        <div className="Navbar">
            <h2>MY PORTFOLIO</h2>
            <div className="sections">
                <ul>
                    <li onClick={onClick}>ABOUT</li>
                    <li onClick={onClick2}>PROJECTS</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;