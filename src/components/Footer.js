import React from 'react'

import '../App.css'
import secoLogo from '../images/seco-logo.png'
import aaltoLogo from '../images/aalto-logo.png'
import omLogoEng from '../images/om-logo_eng.png'
import hyLogo from '../images/university-of-helsinki-logo-transparent-black.png'
import vvmLogo from '../images/vvm-logo-transparent.png'
import editaLogo from '../images/edita-logo-transparent.png'
import heldigLogo from '../images/heldig-logo-transparent-black.png'

const imgStyle = {
  margin: '10px',
  height: '35px'
}

const Footer = () => (
  <div className="footer">
    <img src={omLogoEng} style={imgStyle} alt="om-logo"/>
    <img src={secoLogo} style={imgStyle} alt='seco-logo'/>
    <img src={hyLogo} style={imgStyle}  alt="hy-logo"/>
    <img src={heldigLogo} style={{...imgStyle, height: '27px', marginBottom: '12px'}}  alt="heldig-logo"/>
    <img src={aaltoLogo} style={{...imgStyle, height: '30px', marginTop: '11px'}}  alt="aalto-logo"/>
    <img src={editaLogo} style={{...imgStyle, height: '29px', marginBottom: '13px'}}  alt="edita-logo"/>
    <img src={vvmLogo} style={imgStyle} alt="vvm-logo"/>
  </div>
)

export default Footer