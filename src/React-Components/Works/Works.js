import { useState } from 'react';
import Carta from './Carta';
import HackWeek from './Assets/Image/Hackweek.png';
import Nintendo from './Assets/Image/nintendo-logo.png';
import iconClose from './Assets/Icons/icons8-close.svg'
import PopUP from './PopUP';

const Works = () => {
    
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    
    const handleClick = () => {
        setIsShown(current => !current);
    };
    
    const handleClick2 = () => {
        setIsShown2(current => !current);
    };
    
    const handleClick3 = () => {
        setIsShown3(current => !current);
    };
    
    const data = [
        { id: 1, image: Nintendo, name: "Nintendo.com", description: "Primo lavoro di team nel quale si andava a ricreare il sito nintendo, con le prime tecnologie acquisite.", btn: "Competenze Acquisite", onClick: handleClick},
        { id: 2, image: HackWeek, name: "Hacking Week", description: "In team ci siamo messi alla prova per superare la challenge in una settimana.", btn: "Competenze Acquisite", onClick: handleClick2},
        { id: 3, image: "https://criptovaluteitalia.com/wp-content/uploads/2021/01/come-acquistare-PancakeSwap-CAKE-.jpg", name: "Pancakeswap.finance", description: "Lavoro in team nella ricreazione del sito PancakeSwap, con ulteriori tecnologie.", btn: "Competenze Acquisite", onClick: handleClick3}
    ]

    const data2 = [
        { id: 1, image: iconClose, name: "Competenze", p1: "Linguaggi acquisiti:", list1: "HTML", list2: "CSS", list3: "JavaScript", list4: "Libreria Chart.js", list5: "Libreria Calendar.js", p2: "Metodologia di lavoro:", list6: "Lavoro in team con metodo AGILE", display: isShown2, onClick: handleClick2},
        { id: 2, image: iconClose, name: "Competenze", p1: "Linguaggi acquisiti:", list1: "HTML", list2: "CSS", list3: "JavaScript", list4: "React JS", list5: "Librerie varie", p2: "Metodologia di lavoro:", list6: "Lavoro in team con metodo AGILE", display: isShown3, onClick: handleClick3},
    ]

    return (
      <div>
        <div className='container-h1'>
            <h1>MY PROJECTS</h1>
        </div>
        <div className="container">
          {data.map((a) => (
            <div key={a.id}>
              <Carta props={a} />
            </div>
          ))}
        </div>

        <div className='containerAllPop' style={{ display: isShown ? "flex" : "none" }}>
            <div
            className="container-popUP"
            >
            <div className="container-exitIcon">
                <img src={iconClose} alt="exit" onClick={handleClick} />
            </div>
            <h2>Competenze</h2>
            <p>Linguaggi acquisiti:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <p>Metodologia di lavoro:</p>
            <ul>
                <li>Lavoro in team con metodo AGILE</li>
            </ul>
            </div>
        </div>
            {data2.map((b) => (
            <div key={b.id}>
                <PopUP pop={b} />
            </div>
            ))}
      </div>
    );
}
 
export default Works;