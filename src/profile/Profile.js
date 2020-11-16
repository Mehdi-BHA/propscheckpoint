import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {

    render(props) {

        const {fullname,profession,bio,children}=this.props

        function handleName(e){
            alert(fullname);
        };

        return (
            <div style={{display:"flex", margin:"15% auto", width:"900px", backgroundColor:"#eb6a6a", padding:"20px", borderRadius:"10px", boxShadow:"0 0 15px black"}}>
                <img src={children} alt="pdp" style={{width:"150px",height:"150px", borderRadius:"50%", marginRight:"30px"}}/>
                <p style={{fontSize:"20px"}}>
                    <span style={{fontWeight:"600"}}>Nom: </span>{fullname}<br/>
                    <span style={{fontWeight:"600"}}>Bio: </span>{bio}<br/>
                    <span style={{fontWeight:"600"}}>Profession: </span>{profession}<br/>
                    <button onClick={handleName} style={{borderRadius:"6px",cursor:"pointer", fontSize:"20px", width:"100px", boxSizing:"border-box", padding:"4px 20px", margin:"10px 275px"}} >Alert</button>
                </p>
            </div>
        )

    }
}
Profile.defaultProps = {fullname:"Foulen Ben Foulen",bio:"Foulen Ben Foulen adore coder et est specialiste dans le dévellopement web (HTML/CSS/Javascript/React/NodeJS...)",profession:"Codeur à GoMyCode",children:"/media/pdp.jpg"};


Profile.propTypes = {
    fullname: PropTypes.string,
    bio:  PropTypes.string,
    profession : PropTypes.string
  };

export default Profile;
