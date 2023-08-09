import React from 'react'
import "./Footer.css";
import "./FooterMedia.css";


const Footer = () => {
  return (
    <div className='Footerdiv'>
        <div className='footerwrapper'>
            <div className='footerlogodiv'>
                <div className='thefooterlogo'></div>
                <div className='thefooterlogorest'>
                    <h3 className='thefootname'>Company</h3>
                    <h3 className='thefootname'>Tags</h3>
                </div>
            </div>

            <div className='footerwritediv'>
                <div className='firstfoot'>
                    <h3 className='wordsfooter22'>5th flora, 700/D kings road, greenlane</h3>
                    <h3 className='wordsfooter22'>NewYork-1782+10 367 826 </h3>
                    {/* <h3 className='wordsfooter'>2567contact@carpenter.com</h3> */}
                    <h3 className='wordsfooter22'>2567contact@carpenter.com</h3>
                    <br/>
                    <h3 className='wordsfooter22'>Copyright ©2023 All rights reserved | This</h3>
                    <h3 className='wordsfooter22'>template is made with love by Bad man KoKo</h3>

                </div>
                <div className='secondfoot'>
                    <ul>
                        <li>Price</li>
                        <li> About</li>
                        <li>Explore</li>
                        <li>Bookings</li>
                    </ul>
                </div>
            </div>

            <div className='copyrightdiv'>
               <div className='footerwhiteline'></div>
               <div className='thelinetext'>
               <h3 className='linetext'>Copyright ©2023 All rights reserved | This template is made with love by Bad man KoKo</h3>
               </div>
            </div>

        </div>

    </div>
    

  )
}

export default Footer