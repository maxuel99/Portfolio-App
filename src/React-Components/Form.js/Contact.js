import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lkguoj4', 'template_o52uequ', form.current, 'R_Ht9evIMmd0F1xIk')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };


    return ( 
        <div id="contact" style={{width: "auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 0"}}>
            <a href="#contact" style={{textDecoration: "none", color: "black"}}>
                <h1>CONTACT ME</h1>
            </a>
            <form ref={form} onSubmit={sendEmail} style={{ width: "40%", display: "flex", flexDirection: "column" }}>
                <label>Full name</label>
                <input type="text" name="user_name" required style={{marginBottom: "1rem", borderRadius:"10px", height: "35px", outline: "none", border: "1px solid black"}}/>

                <label>Email address</label>
                <input type="email" name="user_email" required style={{marginBottom: "1rem", borderRadius:"10px", height: "35px", border: "1px solid black"}}/>

                <label>Phone number</label>
                <input type="tel" name="user_phone" required style={{marginBottom: "1rem", borderRadius:"10px", height: "35px", border: "1px solid black"}}/>

                <label>Messsage</label>
                <textarea name="message" rows="4" cols="50" required style={{marginBottom: "1rem", borderRadius:"10px"}}></textarea >

                <button type="submit" style={{ width: "70px", backgroundColor: "rgb(71, 173, 139)", borderRadius:"5px" }}>Send</button>
            </form>
        </div>
     );
}
 
export default Contact;