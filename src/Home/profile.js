import React from 'react';
import ProfileImage from '../images/john.jfif';
import './custom.css';
function profile(){
    return(
        <div className="row profileRow">
            <div className="text-dark col-md-6">
                <h2 >Muhammad Rafly Indrawan</h2>
                <p>Kang Rebahan</p>
                <p>Email : fliw@digitalkode.com</p>
                <p>Whatsapp : 0879178489</p>
            </div>
            <div className="col-md-6 text-center">
                <img className="ProfileImage" src={ProfileImage} width="100%"></img>
                <button onClick={ () => alert("Downloading..") } className="btn btn-lg btn-dark CV">Download CV</button>
                <button onClick={ () => alert("Hiring..") } className="btn btn-lg btn-outline-dark">Hire Me Now</button>
            </div>
        </div>
        
    );
}
export default profile;