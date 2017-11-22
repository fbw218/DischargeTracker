import React, { Component } from 'react';
import $ from 'jquery'; 
import logo from './logo.png';
import './Styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Container />
      </div>
    );
  }
}

class TitleBar extends Component {
  render() {
    return (
      <nav className="TitleBar">
        <div className="nav-wrapper">
          <a className="left"><img className="logo responsive-img" src={logo} alt="..."/></a>
          <a className="brand-logo center">LVHN Discharge</a>
        </div>
      </nav>
    );
  }
}

class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">
            <TitleCard />
          </div>
          <div className="">
            <ClinicalCard />
            <LogisticsCard />
          </div>
          <div className="">
            <PatientEducationCard />
          </div>
          <div className="">
            <NotesCard />
          </div>
        </div>
      </div>
    );
  }
}

class TitleCard extends Component {
  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Before You Leave...</span>
            <div className="row">
              <div className="input-field col s12">
                <input id="destinationValue" type="text" className="validate" />
                  <label className="active" htmlFor="destinationValue">Post Stay Destination</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ClinicalCard extends Component {
  render() {
    return (
      <div className="col m6 s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Clinical</span>
            <form action="#">
              <p>
                <input type="checkbox" className="filled-in" id="clinical1" />
                <label htmlFor="clinical1">Discharge Order Placed</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="clinical2" />
                <label htmlFor="clinical2">Charting Completed</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="clinical3" />
                <label htmlFor="clinical3">"After Vistit Summary" Completed</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="clinical4" />
                <label htmlFor="clinical4">Perscriptions Distributed</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="clinical5" />
                <label htmlFor="clinical5">Immunizations?</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="clinical6" />
                <label htmlFor="clinical6">Final Medical Attention</label>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class LogisticsCard extends Component {
  render() {
    return (
      <div className="col m6 s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Logistics</span>
            <form>
              <p>
                <input type="checkbox" className="filled-in" id="logistics1" />
                <label htmlFor="logistics1">Tranportation to Destination</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="logistics2" />
                <label htmlFor="logistics2">Necessary Medical Equipment Issued</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="logistics3" />
                <label htmlFor="logistics3">Follow-up Appointment Made</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="logistics4" />
                <label htmlFor="logistics4">Payment Arranged</label>
              </p>
              <p>
                <input type="checkbox" className="filled-in" id="logistics5" />
                <label htmlFor="logistics5">Internal Tranportation</label>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class PatientEducationCard extends Component {
  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Patient Education</span>
            <div className="row">
              <div className="col s6">
                <form>
                  <p>
                    <input type="checkbox" className="filled-in" id="Education1" />
                    <label htmlFor="Education1">Teach-Back Completed</label>
                  </p>
                  <p>
                    <input type="checkbox" className="filled-in" id="Education2" />
                    <label htmlFor="Education2">Side Effects Covered</label>
                  </p>
                  <p>
                    <input type="checkbox" className="filled-in" id="Education3" />
                    <label htmlFor="Education3">Medication Schedule</label>
                  </p>
                </form>
              </div>
              <div className="col s6">
                <form>
                  <p>
                    <input type="checkbox" className="filled-in" id="Education4" />
                    <label htmlFor="Education1">"After Visit Summary" Walkthrough</label>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class NotesCard extends Component {
  componentDidMount() {
    $('#NotesArea').trigger('autoresize');    
  };

  render() {
    return (
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">Notes/Questions</span>
            <div className="row">
            <div className="input-field col s12">
              <textarea id="NotesArea" defaultValue="Notes..." className="materialize-textarea"></textarea>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
