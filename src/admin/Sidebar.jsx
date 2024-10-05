import React from 'react';
import { NavLink } from 'react-router-dom';
import '../allCss/sidebar.css';
import { auth } from '../firebaseConfig'; 
import { useState } from 'react';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

function UserSidebar() {
  const[isExpanded, setIsExpanded] = useState(true)

   function HandleExpansion(){
    console.log('state');
    const newvar = !isExpanded
    setIsExpanded(!isExpanded)
    // return newvar
  }
  const user = auth.currentUser; // Get the logged-in user
  return (
    <>
      <button className='expand-sidenavabr' onClick={HandleExpansion}> 
        {isExpanded ?(<div className='sidebar-close-button'><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.883px" height="122.882px" viewBox="0 0 122.883 122.882" enable-background="new 0 0 122.883 122.882" xml:space="preserve"><g><path fill='#ffff' d="M61.441,0L61.441,0l0.001,0.018c16.974,0,32.335,6.872,43.443,17.98s17.98,26.467,17.98,43.441h0.018v0.002l0,0h-0.018 c0,16.976-6.873,32.335-17.98,43.443c-11.109,11.107-26.467,17.979-43.442,17.979v0.018h-0.002l0,0v-0.018 c-16.975,0-32.335-6.872-43.443-17.98C6.89,93.775,0.018,78.417,0.018,61.442H0v-0.001V61.44h0.018 c0-16.975,6.872-32.334,17.98-43.443C29.106,6.89,44.465,0.018,61.44,0.018L61.441,0L61.441,0L61.441,0z M71.701,42.48 c1.908-1.962,1.863-5.101-0.098-7.009c-1.963-1.909-5.102-1.865-7.01,0.097L42.755,58.088l3.553,3.456l-3.568-3.46 c-1.911,1.971-1.863,5.118,0.108,7.029c0.058,0.056,0.116,0.109,0.175,0.162l21.571,22.057c1.908,1.962,5.047,2.006,7.01,0.097 c1.961-1.908,2.006-5.047,0.098-7.01L53.227,61.529L71.701,42.48L71.701,42.48z"/></g></svg></div> )
        :
       (<div className='sidebar-open-button'><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.88px" height="122.88px" viewBox="0 0 122.88 122.88" enable-background="new 0 0 122.88 122.88" xml:space="preserve"><g><path fill='#ffff' d="M61.439,0L61.439,0v0.016c-16.976,0-32.335,6.874-43.443,17.981S0.016,44.464,0.016,61.438H0v0.002l0,0h0.016 c0,16.978,6.874,32.336,17.981,43.444c11.107,11.106,26.467,17.98,43.441,17.98v0.016h0.002l0,0v-0.016 c16.977,0,32.336-6.874,43.443-17.98c11.107-11.108,17.981-26.467,17.981-43.441h0.016v-0.003l0,0h-0.016 c0-16.976-6.874-32.335-17.981-43.442S78.416,0.016,61.442,0.016V0H61.439L61.439,0z M51.181,42.479 c-1.909-1.964-1.864-5.1,0.098-7.01c1.961-1.909,5.1-1.866,7.009,0.098l21.838,22.519l-3.554,3.456l3.569-3.458 c1.91,1.971,1.862,5.116-0.108,7.027c-0.057,0.057-0.115,0.109-0.175,0.161L58.288,87.329c-1.909,1.963-5.048,2.007-7.009,0.097 c-1.962-1.907-2.007-5.045-0.098-7.009l18.473-18.889L51.181,42.479L51.181,42.479z"/></g></svg></div>)}</button>
      {/* {isExpanded &&( */}
      <div style={{width:isExpanded ? '80%':'5rem'}} className="sidenav">
        <br></br>
          {isExpanded? (
           <svg id="Layer_1" className='sidenavimg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 120.26"><title>admin</title><path  fill='#ffff '  d="M47,70.06a19,19,0,0,1-1.66-2c-1.23-1.68-2.37-3.44-3.49-5.21L36.35,54c-2.1-3.1-3.21-5.86-3.21-8.08s1.25-5.12,3.76-5.75a152.65,152.65,0,0,1-.22-15.93,21.05,21.05,0,0,1,.66-3.65A21,21,0,0,1,46.75,8.64,24.2,24.2,0,0,1,51.84,6.2C55.05,5,53.5.12,57,0,65.34-.22,79,6.87,84.26,12.62a20.91,20.91,0,0,1,5.42,13.61l-.33,14.49a4.12,4.12,0,0,1,3,3c.44,1.77,0,4.2-1.55,7.64h0c0,.11-.11.11-.11.22L84.37,62c-1.44,2.36-2.92,4.75-4.58,7-2,2.63-3.59,2.16-1.91,4.68a22,22,0,0,0,8.29,6.66,8.55,8.55,0,0,0-1.19.22h0A7.29,7.29,0,0,0,80.38,84l-2.27,3.93a7.63,7.63,0,0,0-.93,2.77h0a7.61,7.61,0,0,0,.18,2.84l0,.18a7.45,7.45,0,0,0,1.27,2.57l.06.09q-.24.15-.48.33a7.3,7.3,0,0,0-2,2.26,7.39,7.39,0,0,0-.95,2.85,7.93,7.93,0,0,0,.2,2.86h0l1.15,4.37a5.51,5.51,0,0,0,.37,1,7.55,7.55,0,0,0,1,1.73c.1.13.21.25.32.37s.37.38.56.56H0c0-33,35.5-22.55,47.58-39.15,1.39-2.08,1-1.88-.55-3.55Zm74.74,23.68a1.92,1.92,0,0,0-.91-1.2,1.86,1.86,0,0,0-1.48-.18l-2.87.76a14.86,14.86,0,0,0-1.06-1.73,18.15,18.15,0,0,0-1.28-1.59L115.78,87a1.9,1.9,0,0,0-.71-2.65l-3.5-2a1.89,1.89,0,0,0-1.46-.2,1.87,1.87,0,0,0-1.18.91l-1.48,2.55a14.06,14.06,0,0,0-2-.45,15.22,15.22,0,0,0-2-.19l-.87-3.15a1.78,1.78,0,0,0-.87-1.17,1.89,1.89,0,0,0-1.49-.19l-3.87,1a1.9,1.9,0,0,0-1.19.91A1.86,1.86,0,0,0,95,83.88l.77,2.87A13.36,13.36,0,0,0,94,87.81a16.31,16.31,0,0,0-1.6,1.28l-2.79-1.62a1.9,1.9,0,0,0-1.47-.2,1.85,1.85,0,0,0-1.18.92l-2,3.5a1.87,1.87,0,0,0-.19,1.45,1.81,1.81,0,0,0,.9,1.19l2.55,1.48a15.58,15.58,0,0,0-.45,2,15.35,15.35,0,0,0-.2,2l-3.13.83a1.76,1.76,0,0,0-1.18.88,1.9,1.9,0,0,0-.19,1.48l1,3.9a1.91,1.91,0,0,0,.92,1.16,1.88,1.88,0,0,0,1.46.22l2.89-.79a14.86,14.86,0,0,0,1.06,1.73c.4.55.83,1.08,1.28,1.59l-1.61,2.79a1.91,1.91,0,0,0-.21,1.47,1.88,1.88,0,0,0,.92,1.18l3.5,2a2,2,0,0,0,2.65-.71L98.44,115a14.1,14.1,0,0,0,2,.46,17.27,17.27,0,0,0,2,.2l.83,3.13a1.82,1.82,0,0,0,.89,1.19,1.77,1.77,0,0,0,1.47.17l3.91-1a2,2,0,0,0,1.37-2.39l-.79-2.88a14.07,14.07,0,0,0,1.73-1.06,19.77,19.77,0,0,0,1.59-1.28l2.79,1.61a1.92,1.92,0,0,0,2.65-.71l2-3.5a2,2,0,0,0-.71-2.65l-2.55-1.47a17.82,17.82,0,0,0,.44-2,14.25,14.25,0,0,0,.2-2l3.14-.86a1.79,1.79,0,0,0,1.18-.88,1.86,1.86,0,0,0,.19-1.48l-1-3.87Zm-14.86-.29a8,8,0,0,1,2.36,2.08,7.78,7.78,0,0,1,1.55,5.76A8,8,0,0,1,105,108a7.87,7.87,0,0,1-3,.2,8.06,8.06,0,0,1-5.35-3.09,7.79,7.79,0,0,1-1.54-5.75A8,8,0,0,1,98.16,94a7.78,7.78,0,0,1,5.76-1.55,8.09,8.09,0,0,1,3,1Z"/></svg>
          ):( <div className="sidenavimg"></div> )}
        <br></br>
        {isExpanded?(
        <h1>Admin</h1>
        ):( <div className="space-for-sidenav-h1">Admin</div>)}
        <br></br>
        {/* <br></br> */}
        
        <div className="nav-item">
          <NavLink to="/admin/viewusers" className="nav-link">
              <div className="innerNavbar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill='#ffffff' d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
              {isExpanded?('View Users'):('')}
           </div>
            </NavLink>
        </div>
        <div className="nav-item">
            <NavLink to="/admin/setlimit" className="nav-link">
              <div className="innerNavbar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"/></svg>
             {isExpanded?('Set Limit'):('')}
           </div>
            </NavLink>
         
        </div>
        <div className="nav-item">
          <NavLink to="/admin/setprice" className="nav-link">
              <div className="innerNavbar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 112.5L0 422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4l0-309.9c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64l-64 0 0-64zm64-208c0 35.3-28.7 64-64 64l0-64 64 0zM512 304l0 64-64 0c0-35.3 28.7-64 64-64zM448 96l64 0 0 64c-35.3 0-64-28.7-64-64z"/></svg>
              {isExpanded?('Set Price'):('')}
           </div>
            </NavLink>
        </div>
        
        <div className="nav-item">
          <NavLink to="/admin/other-settings" className="nav-link" >
              <div className="innerNavbar" >
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 122.88 122.878" enable-background="new 0 0 122.88 122.878" xml:space="preserve">
                  <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" fill = '#ffff'd="M101.589,14.7l8.818,8.819c2.321,2.321,2.321,6.118,0,8.439l-7.101,7.101 c1.959,3.658,3.454,7.601,4.405,11.752h9.199c3.283,0,5.969,2.686,5.969,5.968V69.25c0,3.283-2.686,5.969-5.969,5.969h-10.039 c-1.231,4.063-2.992,7.896-5.204,11.418l6.512,6.51c2.321,2.323,2.321,6.12,0,8.44l-8.818,8.819c-2.321,2.32-6.119,2.32-8.439,0 l-7.102-7.102c-3.657,1.96-7.601,3.456-11.753,4.406v9.199c0,3.282-2.685,5.968-5.968,5.968H53.629 c-3.283,0-5.969-2.686-5.969-5.968v-10.039c-4.063-1.232-7.896-2.993-11.417-5.205l-6.511,6.512c-2.323,2.321-6.12,2.321-8.441,0 l-8.818-8.818c-2.321-2.321-2.321-6.118,0-8.439l7.102-7.102c-1.96-3.657-3.456-7.6-4.405-11.751H5.968 C2.686,72.067,0,69.382,0,66.099V53.628c0-3.283,2.686-5.968,5.968-5.968h10.039c1.232-4.063,2.993-7.896,5.204-11.418l-6.511-6.51 c-2.321-2.322-2.321-6.12,0-8.44l8.819-8.819c2.321-2.321,6.118-2.321,8.439,0l7.101,7.101c3.658-1.96,7.601-3.456,11.753-4.406 V5.969C50.812,2.686,53.498,0,56.78,0h12.471c3.282,0,5.968,2.686,5.968,5.969v10.036c4.064,1.231,7.898,2.992,11.422,5.204 l6.507-6.509C95.471,12.379,99.268,12.379,101.589,14.7L101.589,14.7z M61.44,36.92c13.54,0,24.519,10.98,24.519,24.519 c0,13.538-10.979,24.519-24.519,24.519c-13.539,0-24.519-10.98-24.519-24.519C36.921,47.9,47.901,36.92,61.44,36.92L61.44,36.92z"/>
                  </g>
              </svg>
              {isExpanded?('Settings'):('')}
           </div>
            </NavLink>
        </div>
        <div className="nav-item">
          <NavLink to="/admin/listofadmin" style={{width:isExpanded ?'75%':'55%'} } className="nav-link last-of-admin" >
            <div className="innerNavbar">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#ffff' d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>
              {isExpanded?('Edit Admin '):('')}
            </div>
          </NavLink>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default UserSidebar;