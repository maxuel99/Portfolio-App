import avatarImg from './Assets/Image/avatar.png'

const Presentation = () => {
    return ( 
        <div className='Presentation' id="profile">
            <img src={avatarImg} alt="immagine profilo" />
            <a href="#profile">
                <h1>MASSIMO MANUEL CASER</h1>
            </a>
            <ul className='list-item'>
                <li>JR Developer</li>
                <li>Web Designer</li>
                <li>Graphic Artist</li>
            </ul>
        </div>
     );
}
 
export default Presentation;