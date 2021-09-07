import React, { Component } from "react";
import classes from "./SightingBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faQuestion, faTimes } from "@fortawesome/free-solid-svg-icons";
class SightingBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sightingId: props.sightingId,
      name: props.name,
      X:props.X,
      Y:props.Y,
      Width:props.Width,
      Height:props.Height,
      Voted: 0,
      Hide: 0,
      ip:props.ip,
      city:props.city,
      country:props.country
    };

  }
  
  postVote(vote){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote: vote , sightingId :this.state.sightingId ,IPAddress : this.state.ip,city : this.state.city,country : this.state.country})
      };
      fetch('https://manage.lms360.net/abcapi/api/vote', requestOptions)
      .then(response => {
        let self = this;
        console.log(response.json());
        this.setState({
          Voted: 1,
        });
        setTimeout(function(){
          self.setState({
            Hide: 1,
          });
         }, 2000);
      });
  }

  render(){
    return (
      <div>
      {this.state.Hide == 0 &&
         <div className={classes.SightingDiv} style={{ left: this.state.X ,top: this.state.Y ,height: this.state.Height,width: this.state.Width}}>
          {this.state.Voted == 0 && <div  className={classes.VoteButtonDiv} >
          <p className={classes.VoteButtonLabel}>{this.state.name}</p>
          <div>
            <button className={classes.VoteButton} onClick={() => this.postVote(2)} style={{ backgroundColor: "#4CAF50" }}>    <FontAwesomeIcon icon={faCheck} /></button>
            <button className={classes.VoteButton} onClick={() => this.postVote(0)} style={{ backgroundColor: "#008CBA" }}>    <FontAwesomeIcon icon={faQuestion} /></button>
            <button className={classes.VoteButton} onClick={() => this.postVote(1)} style={{ backgroundColor: "#f44336" }}>    <FontAwesomeIcon icon={faTimes} /></button>
      
          </div>
      
        </div>
        }
        {this.state.Voted == 1 &&
           <div className={classes.VoteButtonResultDiv} >
             <label className={classes.VoteButtonLabel}>Thank you</label>
           </div>
        }
      </div>
    }
  </div>
    )};
};

export default SightingBox;
