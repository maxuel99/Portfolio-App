const PopUP = ({pop}) => {
    return ( 
        <div className='containerAllPop' style={{ display: pop.display ? "flex" : "none" }} id={pop.id}>
            {/* eslint-disable-next-line */}
            <a href={pop.ashtag}></a>
            <div className='container-popUP'>
                    <div className='container-exitIcon'>
                        <img src={pop.image} alt="exit" onClick={pop.onClick}/>
                    </div>
                    <h2>{pop.name}</h2>
                    <p>{pop.p1}</p>
                    <ul>
                        <li>{pop.list1}</li>
                        <li>{pop.list2}</li>
                        <li>{pop.list3}</li>
                        <li>{pop.list4}</li>
                        <li>{pop.list5}</li>
                    </ul>
                    <p>{pop.p2}</p>
                    <ul>
                        <li>{pop.list6}</li>
                    </ul>
            </div>
        </div>
     );
}
 
export default PopUP;