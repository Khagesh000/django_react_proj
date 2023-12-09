import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from 'react-router-dom';
import './App.css';
import img1 from './images/love.jpeg';
import l1 from './images/l1.jpg'
import l2 from './images/l2.jpg'
import l3 from './images/l3.jpg'
import l4 from './images/l4.jpg'
import l5 from './images/l5.jpg'
import l6 from './images/l6.jpg'
import l7 from './images/l7.jpg'
import l8 from './images/l8.jpg'
import l9 from './images/l9.jpg'


import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';

import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const images = [
  l1,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,


];



export default class CreateRoomPage extends Component {

  componentDidMount() {
    // Add a class to the body tag
    document.body.classList.add('white-cursor');
  }

  componentWillUnmount() {
    // Remove the class when the component is unmounted
    document.body.classList.remove('white-cursor');
  }

  render() {

    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const imageStyle = {
      width: '100%',  // Adjust as needed
      height: '60vh', // This maintains the aspect ratio
      
    };

    const instagramUrl = 'https://www.instagram.com/manimightyboy/';
    const linkedinUrl = 'https://www.linkedin.com/in/KhageshwarYeragana';
    const emailAddress = 'mani@gmail.com';
    const githubUsername = 'Khagesh000';


    return (
      <div id='backg' className='grayBackground'>
        <section className="white-cursor" style={{ backgroundColor: 'black',  minHeight: '100vh', color: 'white', alignItems : 'center', textAlign:'center', cursor:'white' }}>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <Link to="/join" className="navbar-brand">
                  <img src={img1} alt='' width='30' height='24' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Love Calculator</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/join" className="nav-link">FRAMES</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <Link to="/create" className="dropdown-item">Privacy Policy</Link>
                        </li>
                        <li><Link to="/create" className="dropdown-item">Terms And Conditions</Link></li>
                        <li><Link to="/create" className="dropdown-item">Disclaimer</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>


          <div class='p m-3 m-3 text-white' style={{display:'-ms-inline-flexbox', margin:'10%', paddingLeft:'10%', paddingRight:'10%', paddingTop:'5%', paddingBottom:'5%'}}>
                    <h3 class='h3' style={{textAlign:'center', color:'gold'}}>ABOUT US</h3>
                         <p>This website is for entertainment only, it does not reflect anyone's personal opinion, it is purely for entertainment purposes. This website is working

                          It takes every word in each other's names and converts it to an integer, uses a loop like this and converts every word to an integer and gives a result. It's only for entertainment. Everyone can use easily for my website and another page is display flames like friends, love, affection,marriage, enemies and sister this type gives a result.it is also purely depond on names here one by one name calculated and that integer value will be decided to result. Here i am already loading flames full form in one list.

                          The list will be work based on index . Index will be decided to which letter gives in a list.</p>
                          <p>It is my first website using html,css, bootstrap,   javascript, jQuery, reactjs, python and django

                           I am not a perfect creator but i will try create a large websites and unique ideas share your opinion with my external linka</p>
          </div>

          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} style={imageStyle} />
              </div>
            ))}
          </Slider>
        

                    <div class='pb-3' style={{paddingBottom:'6%',}}>
                      <h3 class='h3' style={{textAlign:'center', color:'gold'}}>PRIVACY POLICY</h3>
                      <p></p>
                    </div>

                    <div class='pb-3' style={{paddingBottom:'6%'}}>
                      <h3 class='h3' style={{textAlign:'center', color:'gold'}}>DISCLAIMER</h3>
                      <p></p>
                    </div>


                    <div class='pb-3' style={{paddingBottom:'6%'}}>
                      <h3 class='h3' style={{textAlign:'center', color:'gold'}}>TERMS AND CONDITIONS</h3>
                      <p></p>
                    </div>
                    
                  
                   </section>


        <section>
                    <nav class="navbar navbar-dark bg-dark text-white">
                   <div class="container">
                  <a class="navbar-brand" href="#">
                  <img src={img1} alt='' width='30' height='24' />
                  </a>


    <Stack direction="row" spacing={3}>
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <InstagramIcon sx={{ color: pink[500] }} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon color="primary" />
          </a>
          
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon color="primary" />
          </a>

          <a href={`mailto:${emailAddress}`} color='secondary'><EmailIcon>{emailAddress}</EmailIcon></a>
          

    </Stack>
 </div>
                  </nav>
  </section>
      </div>
    )
  }
}
