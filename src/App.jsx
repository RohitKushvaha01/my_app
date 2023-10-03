import { useState } from 'react'
import './App.css'
import {isMobile,isURL,download} from "./Utils"
function App() {
  const [inputValue, setInputValue] = useState('');
  const [loading,isLoading] = useState(false)
  
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  window.scrollTo(0,0)
  function load(){
  	if(!isURL(inputValue)){
  		//need to show an error
  		alert("Not a Valid url")
  		return
  	}
  	
  	isLoading(true)
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
      
  }

  

  return (
    <>
      <div className="ctn" style={{ marginTop: `-${window.innerHeight/3}px` }}>
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
			
			onClick={load}>

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
