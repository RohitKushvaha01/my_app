export function isMobile() {
  const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}
export function download(url) {
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
export function isURL(str){
		  	const urlPattern = /^(http|https|ftp):\/\/([A-Z0-9_-]+\.)*[A-Z0-9_-]+\.[A-Z]{2,4}.*$/i;
		  	
  			return urlPattern.test(str);
		  }