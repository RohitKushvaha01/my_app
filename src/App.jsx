import { useState } from 'react'
import './App.css'
import {isMobile} from "./Utils"
function App() {
  const [inputValue, setInputValue] = useState('');
  const [loading,isLoading] = useState(false)
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  

  function load(){
  	if(!isURL(inputValue)){
  		//need to show an error
  		return
  	}
    fetch('http://127.0.0.1:8080/url?='+inputValue)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.text();
        isLoading(false)
      })
      .then((result) => {
        if(result!=null){
        	download(result)
        }
        isLoading(false)
      })
      .catch((error) => {
        console.error('Fetch error:', error);
				isLoading(false)
      });
      function download(url) {
  if (isURL(url)) {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.style.display = "none";
    anchor.download = ""; // You can specify a default file name here if needed

    // Append the anchor to the body and trigger a click event
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up by removing the anchor element
    document.body.removeChild(anchor);
  }
    // Create an anchor element
    
}
		  function isURL(str){
		  	const urlPattern = /^(http|https|ftp):\/\/([A-Z0-9_-]+\.)*[A-Z0-9_-]+\.[A-Z]{2,4}.*$/i;
		  	
  			return urlPattern.test(str);
		  }
  }

  

  return (
    <>
      <div className="ctn" style={{ top: `-${window.innerHeight / 3}px` }}>
        <h2 style={{ width: '100%' }}>Insta-Save</h2>
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={handleInputChange}
          className="editbox"
          placeholder="Paste Url"
        />
			
			
			<button className="btn"
			
			onClick={()=>{
				isLoading(true)
				load()
			}}>

			 {loading && (
			 	    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
			 	)}
			 				<p className="dn"
			 				style={{marginLeft: (()=>{
			 					if(loading){
			 						return (isMobile()) ? "26%" : "36%"
			 					}
			 					return (isMobile()) ? "36%" : "46%"
			 				})()}}
			 				>Download</p>
			</button>
        
      </div>
      
      
    </>
  );
}

/*
{loading && (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  )}
  <p className="dn"
    style={{marginLeft: (ismobile()) ? "30%" : "36%"}}
*/


export default App
