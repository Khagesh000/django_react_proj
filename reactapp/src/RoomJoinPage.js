import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import img1 from './images/love.jpeg';
import './App.css';



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


export default class RoomJoinPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num3: '',
      num4: '',
      gender1: 'female',
      gender2: 'male',
      errorMessages: {
        demo3: '',
        demo4: '',
      },
      result: '',
    };
  }

  validateInput = () => {
    const { num3, num4 } = this.state;
    const getx1 = /^[a-zA-Z ]+$/;
    const getx2 = /^[a-zA-Z ]+$/;

    const errorMessages = {
      demo3: '',
      demo4: '',
    };

    if (num3.length > 0 && num3.length > 2 && !num3.match(getx1)) {
      errorMessages.demo3 = 'Numbers are not allowed';
    }

    if (num4.length > 0 && num4.length > 2 && !num4.match(getx2)) {
      errorMessages.demo4 = 'Numbers are not allowed';
    }

    this.setState({ errorMessages });

    return Object.values(errorMessages).every((msg) => !msg);
  };

  calculateFlames = () => {
    const { num3, num4 } = this.state;
    const combinedNames = num3.toLowerCase() + num4.toLowerCase();
  
    const uniqueChars = Array.from(new Set([...combinedNames]));
  
    const charCount = {};
    uniqueChars.forEach(char => {
      charCount[char] = (num3.split(char).length - 1) + (num4.split(char).length - 1);
    });
  
    const flamesCategories = ["Friend", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
  
    let totalCount = 0;
    flamesCategories.forEach(category => {
      totalCount += charCount[category.charAt(0).toLowerCase()] || 0;
    });
  
    const resultCategoryIndex = totalCount % flamesCategories.length;
  
    this.setState({ result: "" + flamesCategories[resultCategoryIndex] });
  };
  
  

  handleButtonClick = () => {
    const isValid = this.validateInput();

    if (!isValid) {
      return;
    }

    this.calculateFlames();
  };

 

  render() {
    const { errorMessages, result, gender1, gender2 } = this.state;

    const instagramUrl = 'https://www.instagram.com/manimightyboy/';
    const linkedinUrl = 'https://www.linkedin.com/in/KhageshwarYeragana';
    const emailAddress = 'mani@gmail.com';
    const githubUsername = 'Khagesh000';


    return (
      <div>
        <section>
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
                    <Link to="/create" className="nav-link">About Us</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown link
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <Link to="/create" className="dropdown-item">Disclaimer</Link>
                        </li>
                        <li><Link to="/create" className="dropdown-item">Policy Privacy</Link></li>
                        <li><Link to="/create" className="dropdown-item">Terms and Conditions</Link></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>

        <div id='yourcomponent1'>
          <p className='input-p'>FRAMES</p>

          <div className="input-group input-group-xs mb-1 p-3  input align-items-center">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group-1"
                value={gender1}
                onChange={(e) => this.setState({ gender1: e.target.value })}
              >
                <FormControlLabel value="female" control={<Radio />} label="Male" />
                <FormControlLabel value="male" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="input-group input-group-xs  p-3  input align-items-center">
            <span className="input-group-text" id="inputGroup-sizing-xs">_FIRST_NAME_</span>
                     <input
              type="text"
              className="form-control input-bar"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter a name"
              id="num3"
              value={this.state.num3}
              onChange={(e) => this.setState({ num3: e.target.value })}
            />
          </div>
          <div id="demo3" style={{textAlign: 'center',}}>{errorMessages.demo3}</div>

          <div className="input-group input-group-xs mb-1 p-3 input align-items-center">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group-2"
                value={gender2}
                onChange={(e) => this.setState({ gender2: e.target.value })}
              >
                <FormControlLabel value="female" control={<Radio />} label="Male" />
                <FormControlLabel value="male" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="input-group input-group-xs  p-3 input align-items-center">
            <span className="input-group-text" id="inputGroup-sizing-xs">SECONDNAME</span>
            <input
              type="text"
              className="form-control input-bar"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter a name"
              id="num4"
              value={this.state.num4}
              onChange={(e) => this.setState({ num4: e.target.value })}
            />
            <br />
          </div>
          <div id="demo4" style={{textAlign: 'center', }}>{errorMessages.demo4}</div>

          <div className="input-group input-group-xs mb-3 p-3 input align-items-center">
            <Button
              variant="contained"
              disableElevation
              aria-describedby="inputGroup-sizing-sm"
              aria-label="Sizing example input"
              className="form-control input-bar btn-primary"
              value="calculate"
              name="calculate"
              type="submit"
              onClick={this.handleButtonClick}
            >
              CALCULATE
            </Button>
          </div>

          <div class="input-group input-group-xs  p-3  input align-items-center" id='result'>
          <span class="input-group-text bg-pink p-3 ms-2 form-control input-bar btn-warning" disableElevation aria-describedby="inputGroup-sizing-sm" aria-label="Sizing example input" id="inputGroup-sizing-xs" ><p class='bold-and-blink text-danger-blink'>{result}</p></span>
          </div>

        </div>

        
        <section>


                     
                      
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
      <td>{this.state.num3}</td>
      <td>{this.state.num4}</td>
      <td>{result}</td>
    </tr>

    <tr>
      <td>Jack</td>
      <td>Rose</td>
      <td>Love</td>
    </tr>


    <tr>
      <td>Doramon</td>
      <td>Nobita</td>
      <td>Friends</td>
    </tr>


    <tr>
      <td>Mottu</td>
      <td>Patulu</td>
      <td>Siblings</td>
    </tr>
    
  </tbody>
</table>

          <div class='p m-3 m-3 text-grey' style={{display:'-ms-inline-flexbox', margin:'10%', paddingLeft:'10%', paddingRight:'10%', paddingTop:'5%', paddingBottom:'5%'}}>
                      <p>Flames full form is friends, lovers, affection, marriage,enemy and sister. Here i will decide already list is trained one variable stores the entire list then you can give first person name and second person name after changes the strings to integer that result will be decided to the result. Now list is opened and gives the result like friends,lovers, affection, marriage, enemy and sister it is just for entertainment purpose. I am not hurting anyone.</p>
                      <li>Friendship is very pure and they enjoy a happy life</li>
                      <li>Lover's life should be enjoyed more and life time should be together</li>
                      <li>Affection is just a feeling for you, it's not permanent with every person</li>
                      <li>May your life time be happy with all the blessings of marriage and your future will be good</li>
                      <li>Enemy not that negative feeling here you have to think positive cc happy ga move on</li>
                      <li>Sister is a pure and emotional relationship</li>
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
    );
  }
}

