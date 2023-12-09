import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import img1 from './images/love.jpeg'




import './App.css'
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      num: '',
      num1 : '',
       
      errorMessages: {
        demo: '',
        demo1: '',
      },
        result: null,
    };
  }


  validateInput = () => {
    const { num, num1 } = this.state;
    const getx1 = /^[a-zA-Z ]+$/;
    const getx2 = /^[a-zA-Z ]+$/;

    const errorMessages = {
      demo: '',
      demo1: '',
    };

    if (num.length > 2 && !num.match(getx1)) {
      errorMessages.demo = 'Numbers are not allowed';
    }

    if (num1.length > 2 && !num1.match(getx2)) {
      errorMessages.demo1 = 'Numbers are not allowed';
    }

    this.setState({ errorMessages });

    // Return true only if there are no error messages
    return Object.values(errorMessages).every((msg) => !msg);
  };



  async getCSRFToken() {
    try {
      const response = await fetch('http://127.0.0.1:8000/csrf_token/', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      return data.csrfToken;
    } catch (error) {
      console.error('Error fetching CSRF token:', error);
      // Handle the error as needed
      return null;
    }
  }
 


// ...

// ...

// ...

handleButtonClick = () => {
    const { num, num1 } = this.state;

    const isValid = this.validateInput();

    if (!this.validateInput()) {
      return;
  };
  console.log('Further logic...');

  // Use the calculateResult function to get the result
  const result = this.calculateResult(num, num1);

  // Update the result state with the calculated result
  this.setState({
    result: result,
    errorMessages: { demo1: '', demo2: '' }, // Reset error messages
  });
}


calculateResult = (num, num1) => {
  // Implement the logic to calculate the result using num1 and num2
  const value1 = this.calculateValue(num);
  const value2 = this.calculateValue(num1);

  const last = value1 % 10;
  const k = this.calculateSumOfDigits(value1);

  const late = value2 % 10;
  const j = this.calculateSumOfDigits(value2);

  const sum = last + k + j + late + 33;

  return sum;
};


calculateValue = (data) => {
  let value = 0;

  for (const char of data) {
    value += char.charCodeAt(0);
  }

  return value;
};



calculateSumOfDigits = (value) => {
  let rev = 0;

  while (value !== 0) {
    const r = value % 10;
    rev += r;
    value = Math.floor(value / 10);
  }

  return rev;
};


  handleFormSubmit = (e) => {
    e.preventDefault();
    this.handleButtonClick();
  };
  

  render() {
  

    const { result } = this.state;
    const { errorMessages } = this.state;
    console.log('errorMessages:', errorMessages);
    console.log('result:', result);

    const instagramUrl = 'https://www.instagram.com/manimightyboy/';
    const linkedinUrl = 'https://www.linkedin.com/in/KhageshwarYeragana';
    const emailAddress = 'mani@gmail.com';
    const githubUsername = 'Khagesh000';
return (
      <div>

               
        
        <Router>
          <Routes>
            <Route path="/" element={
              <><div>
                       
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={img1} alt='' width='30' height='24'></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul class="navbar-nav">


                        <li class="nav-item">
                          <Link to="/join" class="nav-link">FRAMES</Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/create" class="nav-link">About Us</Link>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                             <li><Link to="/create" class="dropdown-item">Disclaimer</Link>
                        </li>
                            <li><Link to="/create" class="dropdown-item">Policy Privacy</Link></li>
                            <li><Link to="/create" class="dropdown-item">Terms And Conditions</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

              </div>
              
              
              <section id='input-in'>
                
                <form method="post" name="form" onSubmit={this.handleFormSubmit}></form>
                
                 <div id='yourcomponent'>
                    
                 <p class='input-p'>LOVE CALCULATE</p>

                      <div class="input-group input-group-xs  p-3  input align-items-center input-radio">
                        
    <FormControl class='form-radio'>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio  checked={true}/>} label="Male" />
        <FormControlLabel value="male" control={<Radio />} label="Female" />
       
      </RadioGroup>
    </FormControl>
  </div>

  
                 <div class="input-group input-group-xs mb-3 p-3  input align-items-center">
                     
                      <span class="input-group-text" id="inputGroup-sizing-xs">_FIRST_NAME_</span>
                      <input type="text" class="form-control input-bar" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Enter a name' name='num1' id='num' value={this.state.num}
                                onChange={(e) => this.setState({ num: e.target.value })}/>
                       
                      </div>
                      <div id="demo" style={{textAlign: 'center',}}>{this.state.errorMessages.demo}</div>
                     

                      <div class="input-group input-group-xs mb-1 p-3  input align-items-center">
                        
                        <FormControl>
                          
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                          >
                            <FormControlLabel value="female" control={<Radio  />} label="Male" />
                            <FormControlLabel value="male" control={<Radio checked={true}/>} label="Female" />
                           
                          </RadioGroup>
                        </FormControl>
                      </div>

                      <div class="input-group input-group-xs mb-3 p-3 input align-items-center">
                      <span class="input-group-text" id="inputGroup-sizing-xs">SECONDNAME</span>
                      <input type="text" class="form-control input-bar" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder='Enter a name' name='num2'  id='num1'  value={this.state.num1}
                         onChange={(e) => this.setState({ num1: e.target.value })}/>
                       
                      </div>
                      <div id="demo1" style={{textAlign: 'center',}}>{this.state.errorMessages.demo1}</div>
                     
                          

                      <div class="input-group input-group-xs mb-3 p-3  input align-items-center">
                      <Button variant="contained" disableElevation aria-describedby="inputGroup-sizing-sm" aria-label="Sizing example input" class="form-control input-bar btn-primary" value='calcualte' name='calculate'  onClick={this.handleButtonClick} type="submit">
                          CALCULATE
                        </Button>
                      </div>
                     

                      <div class="input-group input-group-xs  p-3  input align-items-center">
                      <span class="input-group-text bg-pink p-1 ms-2 form-control input-bar btn-danger" disableElevation aria-describedby="inputGroup-sizing-sm" aria-label="Sizing example input" id="inputGroup-sizing-xs" ><p class='bold-and-blink text-danger-blink'>{result}%</p></span>
                      </div>

                     
                      </div>
                 
              </section>

              <div class='p text-grey' style={{display:'-ms-inline-flexbox',  paddingLeft:'10%', paddingRight:'10%', paddingTop:'5%'}}>
                    <p><span style={{color:'red'}}>{this.state.num}</span> and <span style={{color:'red'}}>{this.state.num1}</span>. You two will stay together and lead an enjoyable life.</p>
          </div>
                              
                      <section id='table' style={{display:'-ms-inline-flexbox',  paddingLeft:'10%', paddingRight:'10%', paddingTop:'2%'}}>

                     
                      
  <table class="table table-danger">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Partner Name</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{color: 'red',}}>
        <td>{this.state.num}</td>
        <td>{this.state.num1}</td>
        <td>{result}</td>
      </tr>

      <tr>
        <td>Jack</td>
        <td>Rose</td>
        <td>89%</td>
      </tr>

      <tr>
        <td>Virat Kohli</td>
        <td>Anushka Sharma</td>
        <td>93%</td>
      </tr>


      <tr>
        <td>Doramon</td>
        <td>Nobita</td>
        <td>96%</td>
      </tr>


      <tr>
        <td>Mottu</td>
        <td>Patulu</td>
        <td>66%</td>
      </tr>
      
    </tbody>
  </table>

                      </section>

                      <div class='p m-3 m-3 text-grey' style={{display:'-ms-inline-flexbox', margin:'10%', paddingLeft:'10%', paddingRight:'10%', paddingTop:'5%', paddingBottom:'5%'}}>
                         <p>This Love Calisulator does not mean to hurt anyone, it is just for entertainment purpose, we can enjoy Rasily and Timepass. Here i will use highly web framework django it is supported high tasks and performance easily. This love calculator works on two names first follow takes the first person letter and second person letter convert to integer like that using loop every first person word thoo another person word that gives a result. I am not encouraging anything it's just for entertainment purpose</p>
                          <p>I will give to percentage wise descrimination 90 to 100 percentage is truely relationship, 70 to 80 percentage is a perfect pair, 60 to 70 percentage is good pair, 45 to 60 is a good match and less than is a good luck these predictions are not hurting to anyone.</p>
                          <p>I am using frontend reactjs and backend django it is my first webstite can you suggest anything in my external links. I am respecting to every comments above this website.Every comment is reading and implementing your ideas and i will leran new ideas can you suggest on external links.</p>
          </div>

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
              
              
              </>
            } />

            
            <Route path="/join" element={<RoomJoinPage />} />
            <Route path="/create" element={<CreateRoomPage />} />
           
            
          </Routes>
        </Router>

       
      </div>
    
        
   
    );
  }
}

