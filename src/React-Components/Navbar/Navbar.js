const Navbar = () => {
    const onClick0 = () => {
        window.location.href = "/";
      };


    const onClick = () => {
        window.location.href = "#profile";
      };
    
      const onClick2 = () => {
        window.location.href = "#projects";
      };

      const onClick3 = () => {
        window.location.href = "#statistics";
      };

      const onClick4 = () => {
        window.location.href = "#contact";
      };

    return ( 
        <div className="Navbar">
            <h2 onClick={onClick0}>MY PORTFOLIO</h2>
            <div className="sections">
                <ul>
                    <li onClick={onClick}>ABOUT</li>
                    <li onClick={onClick2}>PROJECTS</li>
                    <li onClick={onClick3}>STATISTICS</li>
                    <li onClick={onClick4}>CONTACT</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;