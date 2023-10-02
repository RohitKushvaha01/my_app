import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import EditBox from './editbox'


/*function App() {const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
 
 
  return (
    <>
			<div className="logo" style={{top: `-${window.innerHeight/3}px`}}>
        <h2 style={{width: '100%'}}>Insta-Save</h2>

                              <input
                    type="text"
                    id="myInput"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="editbox"
                    placeholder=" Paste Url"
                />
      <button onClick={cont}>Download</button>
      </div>
      

     
    </>
  )
}*/
function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [data, setData] = useState(null);

  function load(){
  	if(!isURL()){
  		//need to show an error
  		return
  	}
    // Replace 'your-server-url' with the actual URL of your server.
    fetch('https://rohit.cyclic.cloud/url?='+inputValue)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return response.text();
      })
      .then((result) => {
        setData(result);
        if(data!=null){
        	download(data)
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
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
			function isURL(str) {
  const urlPattern = /^(http|https|ftp):\/\/([A-Z0-9_-]+\.)*[A-Z0-9_-]+\.[A-Z]{2,4}.*$/i;
  return urlPattern.test(str);
}
  }
  
  

  

  return (
    <>
      <div className="logo" style={{ top: `-${window.innerHeight / 3}px` }}>
        <h2 style={{ width: '100%' }}>Insta-Save</h2>
        <input
          type="text"
          id="myInput"
          value={inputValue}
          onChange={handleInputChange}
          className="editbox"
          placeholder="Paste Url"
        />
        <button onClick={load}>Download</button>
      </div>
    </>
  );
}

export default App
