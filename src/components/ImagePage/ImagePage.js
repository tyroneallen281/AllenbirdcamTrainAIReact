import React, { Component } from "react";
import SightingBox from "../SightingBox/SightingBox";
import classes from "./ImagePage.module.css";

let buttonText="Next";

class ImagePage extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      imagePath: "",
      sightings: [],
      imageLoading: true,
      ip:"",
      city:"",
      country:""
    };

    
  }

  loadNextImage() {
    console.log("Next");
    this.getData();
  }


  async componentDidMount() {
    this.getIp();
    this.getData();
  }

  getIp(){
    const requestOptions = {
      method: 'GET'
      };
      fetch('https://ipapi.co/json/', requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            ip: result.ip,
            city: result.city,
            country: result.country_name,
          });
        },
        (error) => {
       
        }
      )
    
  }

  getData() {
    this.setState({
      imagePath: "images\Loading.svg",
    });
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      //this.setState({ imageLoading: true });
      var model = JSON.parse(xhr.responseText);
      this.setState({
        imagePath: 'https://lmsblob.blob.core.windows.net/'+model.imagePath,
      });
      this.setState({
        sightings: model.sightings,
      });
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://manage.lms360.net/abcapi/api/image')
    // send the request
    xhr.send()
  }


  handleImageLoaded() {
    this.setState({ imageLoading: false });
  }

  handleKeypress = e => {
    if (e.keyCode === 13) {
      this.getData();
    }
  };

  render() {
    return (
     
              <>
              
                <div className={classes.ImagePageDiv}>

                {this.state.imageLoading == false && this.state.sightings.map((item,index) =>
                    <SightingBox 
                    key={item.sightingId}
                    name={item.name}
                    sightingId={item.sightingId}
                    X={item.x}
                    Y={item.y}
                    Width={item.width}
                    Height={item.height}
                    ip={this.state.ip}
                    city={this.state.city}
                    country={this.state.country}
                    ></SightingBox>
                  )}
                   <img className={classes.ImagePageImg} src={this.state.imagePath}
                  onLoad={this.handleImageLoaded.bind(this)}
                 >
                    
                  </img>
                  <button className={classes.NextButton} onClick={() => this.getData()} onKeyPress={this.handleKeyPress} >
                    Next
                  </button>
                   
                </div>
               
              </>
            );
  }
}

export default ImagePage;
