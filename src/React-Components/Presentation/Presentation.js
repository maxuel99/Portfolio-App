import avatarImg from './Assets/Image/avatar.png'

const Presentation = () => {
    return ( 
        <div className='Presentation'>
            <img src={avatarImg} alt="immagine profilo" />
            <h1>MASSIMO MANUEL CASER</h1>
            <ul className='list-item'>
                <li>JR Developer</li>
                <li>Web Designer</li>
                <li>Graphic Artist</li>
            </ul>
        </div>
     );
}
 
export default Presentation;