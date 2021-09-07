import React, { Component } from "react";
import _ from "lodash";
import ImagePage from "./components/ImagePage/ImagePage";
import "./App.css"; 

const lightTheme = {
  "--color-primary": "#E60000",
  "--color-background": "#F1F1F1",
  "--color-page": "#FFFFFF",
  "--color-page-banner": "#F8F9FA",
  "--color-border-shadow": "rgba(73, 80, 87, .3)",
  "--color-svg-symbols": "var(--color-primary)",
  "--color-cancel-background": "#FFFFFF",
  "--color-cancel-border": "#000000",
  "--color-cancel-text": "#000000",
  "--color-cancel-hover-background": "#FFFFFF",
  "--color-cancel-hover-border": "#000000",
  "--color-cancel-hover-text": "#000000",
  "--color-submit-background": "var(--color-primary)",
  "--color-submit-border": "var(--color-primary)",
  "--color-submit-text": "#FFFFFF",
  "--color-submit-hover-background": "var(--color-primary)",
  "--color-submit-hover-border": "var(--color-primary)",
  "--color-submit-hover-text": "#FFFFFF",
  "--color-submit-disabled-background": "#ADB5BD",
  "--color-submit-disabled-border": "#ADB5BD",
  "--color-submit-disabled-text": "#FFFFFF",
  "--color-text": "#000000",
  "--color-text-label": "#6c757d",
  "--color-input-text": "#000000",
  "--color-input-border": "#F1F1F1",
  "--color-input-background": "#FFFFFF",
  "--color-input-placeholder": "rgba(0, 0, 0, 0)",
  "--color-input-error": "var(--color-primary)",
  "--color-checkbox-border": "#CCCCCC",
  "--color-checkbox-background": "#CCCCCC",
  "--color-modal-background": "var(--color-page)",
  "--color-modal-text": "var(--color-text-label)",
};

const darkTheme = {
  "--color-primary": "#E60000",
  "--color-background": "#292929",
  "--color-page": "#121212",
  "--color-page-banner": "#1E1E1E",
  "--color-border-shadow": "rgba(73, 80, 87, .3)",
  "--color-svg-symbols": "var(--color-primary)",
  "--color-cancel-background": "#121212",
  "--color-cancel-border": "#FFFFFF",
  "--color-cancel-text": "#FFFFFF",
  "--color-cancel-hover-background": "#121212",
  "--color-cancel-hover-border": "#FFFFFF",
  "--color-cancel-hover-text": "#FFFFFF",
  "--color-submit-background": "var(--color-primary)",
  "--color-submit-border": "var(--color-primary)",
  "--color-submit-text": "#FFFFFF",
  "--color-submit-hover-background": "var(--color-primary)",
  "--color-submit-hover-border": "var(--color-primary)",
  "--color-submit-hover-text": "#FFFFFF",
  "--color-submit-disabled-background": "#ADB5BD",
  "--color-submit-disabled-border": "#ADB5BD",
  "--color-submit-disabled-text": "#FFFFFF",
  "--color-text": "#878787",
  "--color-text-label": "#878787",
  "--color-input-text": "#FFFFFF",
  "--color-input-border": "#F1F1F1",
  "--color-input-background": "#121212",
  "--color-input-placeholder": "rgba(0, 0, 0, 0)",
  "--color-input-error": "var(--color-primary)",
  "--color-checkbox-border": "#CCCCCC",
  "--color-checkbox-background": "#CCCCCC",
  "--color-modal-background": "var(--color-page)",
  "--color-modal-text": "var(--color-text-label)",
};

const blueBulls = {
  "--color-primary": "#2B4D9C",
  "--color-background": "var(--color-primary)",
  "--color-page": "#FFFFFF",
  "--color-page-banner": "#F8F9FA",
  "--color-border-shadow": "rgba(73, 80, 87, .3)",
  "--color-svg-symbols": "var(--color-primary)",
  "--color-cancel-background": "#FFFFFF",
  "--color-cancel-border": "#000000",
  "--color-cancel-text": "#000000",
  "--color-cancel-hover-background": "#FFFFFF",
  "--color-cancel-hover-border": "#000000",
  "--color-cancel-hover-text": "#000000",
  "--color-submit-background": "var(--color-primary)",
  "--color-submit-border": "var(--color-primary)",
  "--color-submit-text": "#FFFFFF",
  "--color-submit-hover-background": "var(--color-primary)",
  "--color-submit-hover-border": "var(--color-primary)",
  "--color-submit-hover-text": "#FFFFFF",
  "--color-submit-disabled-background": "#ADB5BD",
  "--color-submit-disabled-border": "#ADB5BD",
  "--color-submit-disabled-text": "#FFFFFF",
  "--color-text": "#000000",
  "--color-text-label": "#6c757d",
  "--color-input-text": "#000000",
  "--color-input-border": "#F1F1F1",
  "--color-input-background": "#FFFFFF",
  "--color-input-placeholder": "rgba(0, 0, 0, 0)",
  "--color-input-error": "var(--color-primary)",
  "--color-checkbox-border": "#CCCCCC",
  "--color-checkbox-background": "#CCCCCC",
  "--color-modal-background": "var(--color-page)",
  "--color-modal-text": "var(--color-text-label)",
};

const customThemes = { blueBulls: blueBulls };

class App extends Component {
  state = {
    
  };
  constructor(props) {
    super(props);
  }
  


  render() {
   
    return (
      <div className="app">
        { <ImagePage />}
     
      </div>
    );
  }
}

export default App;
